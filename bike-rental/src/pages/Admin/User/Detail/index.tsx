import { useEffect, useState } from "react"
import { axiosClient } from "../../../../apis/axiosClient"
import { useParams } from "react-router-dom"
import { SideBar } from "../../../../components/SideBar"
import { Header } from "../../../../components/Admin/Header"
import ContractData from "../../Contract"
import { Format_DateTime } from "../../../../helpers/Format_DateTime"
import { Format_Currency } from "../../../../helpers/Format_Currency"
import { TextColor } from "../../../../helpers/TextColor"

const INITIAL_DATA: ContractData = {
    _id: '',
    start_date: new Date(),
    end_date: new Date(),
    pickup_address: '',
    return_address: '',
    status: '',
    total_price: 0,
    duration: 0,
    type: '',
    bikes: [],
    createdAt: new Date(),
    payment: false
}

export const ProfileUser = () => {

    const params = useParams();

    const [contract, setContract] = useState([INITIAL_DATA]);

    useEffect(() => {
        const getContractByUserId = async () => {
            const contract = await axiosClient.get(`/contract/profile/${params.user_id}`);
            setContract(contract.data);
        }
        getContractByUserId();
    }, [])

    return (
        <>
            <SideBar />

            <section className="home-section">

                <Header />

                <h1 className="heading mt-16"><span>Hồ Sơ Đặt Xe</span></h1>
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {/* <!-- Start coding here --> */}
                    <div className="bg-white rounded">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <input type="text" id="simple-search" className="border text-sm rounded-lg block w-full pl-10 p-2" placeholder="Search" required />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <div className="">
                                        Số Lượt Đã Thuê: {contract.length}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-orange-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">STT</th>
                                        <th scope="col" className="px-4 py-3">Địa Điểm</th>
                                        <th scope="col" className="px-4 py-3">Thời Gian</th>
                                        <th scope="col" className="px-4 py-3">Số Lượng</th>
                                        <th scope="col" className="px-4 py-3">Trạng Thái</th>
                                        <th scope="col" className="px-4 py-3">Ngày Đặt Xe</th>
                                        <th scope="col" className="px-4 py-3">Tổng Giá Thuê</th>
                                        <th scope="col" className="px-4 py-3">Thanh Toán</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        contract.map((e, i) => (
                                            <tr key={i} className="border-b dark:border-gray-700">
                                                <td className="px-4 py-3">{i + 1}</td>
                                                <td className="px-4 py-3">{e.pickup_address}</td>
                                                <td className="px-4 py-3">
                                                    {Format_DateTime(e.start_date)}
                                                    {Format_DateTime(e.end_date)}
                                                </td>
                                                <td className="px-4 py-3">{e.bikes.length}</td>
                                                <td className="px-4 py-3">{TextColor(e.status)}</td>
                                                <td className="px-4 py-3">{Format_DateTime(e.createdAt)}</td>
                                                <td className="px-4 py-3">{Format_Currency(e.total_price)}</td>
                                                {
                                                    e.payment ? <td className="px-4 py-3 text-green-500">Đã Thanh Toán</td> : <td className="px-4 py-3">Chưa Thanh Toán</td>
                                                }

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            {/* <table className="w-full text-sm text-left">
                                {
                                    contract.bikes.map((element, index) => (
                                        <Fragment key={index}>
                                            <thead className="text-xs uppercase">
                                                <tr>
                                                    <th scope="col" className="px-4 py-3">{element.model}</th>
                                                    <th scope="col" className="px-4 py-3">Biển Số</th>
                                                    <th scope="col" className="px-4 py-3">Giá Thuê / Ngày</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className="border-b dark:border-gray-700">
                                                    <td className="px-4 py-3">
                                                        <img className='h-28' src={element.imgUrl} alt="" />
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {element.license_plate}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {Format_Currency(element.price)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Fragment>
                                    ))
                                }
                            </table> */}
                        </div>
                        {/* <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing
                                <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                                of
                                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">Previous</span>
                                        Icon
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">Next</span>
                                        Icon
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </section>
        </>
    )
}
