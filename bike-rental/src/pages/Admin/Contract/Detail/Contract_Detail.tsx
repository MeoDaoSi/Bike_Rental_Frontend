import { useState, useEffect, ReactNode, Fragment } from 'react';
import { axiosClient } from '../../../../apis/axiosClient';
import BikeData from '../../Bike/ListBike';
import UserData from '../../User/User';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { SideBar } from '../../../../components/SideBar';
import { Header } from '../../../../components/Admin/Header';
import { Format_DateTime } from '../../../../helpers/Format_DateTime';
import { Format_Currency } from '../../../../helpers/Format_Currency';
import { TextColor } from '../../../../helpers/TextColor';

export default interface ContractData {
    _id: string,
    start_date: string,
    end_date: string,
    pickup_address: string,
    return_address: string,
    status: string,
    total_price: number,
    duration: number,
    type: string
    bikes: BikeData[],
    user?: Partial<UserData>,
    staff?: Partial<UserData>,
    createdAt: string,
}

export default interface Contract_Detail {
    imgUrl: any,
}

const INITIAL_DATA: ContractData = {
    _id: '',
    start_date: '',
    end_date: '',
    pickup_address: '',
    return_address: '',
    status: '',
    total_price: 0,
    duration: 0,
    type: '',
    bikes: [],
    createdAt: '',
    imgUrl: {},
    user: {
        _id: '',
        full_name: '',
        email: '',
        phone_number: 0,
        address: '',
    },
    staff: {
        _id: '',
        full_name: '',
        email: '',
        phone_number: 0,
        address: '',
    }

}

export const Contract_Detail = () => {

    const params = useParams();
    const [contract, setContract] = useState(INITIAL_DATA);
    const [contractInfo, setContractInfo] = useState([]);

    const updateFields = (newFields: Partial<ContractData>) => {
        setContract(prev => ({ ...prev, ...newFields }))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient.get(`/contract/${params.contract_id}`);
                console.log(res);
                setContract(res.data);

            } catch (error) {
                console.log('Error');
            }
        }
        fetchData();

        const getInfo = async () => {
            try {
                const rs = await axiosClient.get(`/contract/${params.contract_id}/upload`);
                console.log(rs.data);
                setContractInfo(rs.data)

            } catch (error) {

            }
        }
        getInfo()
    }, []);

    const handleAddSubmit = async (e: any) => {
        e.preventDefault();
        console.log(contract.imgUrl);
        const formData = new FormData();
        formData.append('file', contract.imgUrl); // Convert the object to a string
        console.log(formData);

        try {
            const res = await fetch(`http://localhost:8888/contract/${params.contract_id}/upload`, {
                method: 'POST',
                body: formData,
            })
            console.log(res);
        } catch (error) {
            console.log('Error');
        }
    }

    const updateContract = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axiosClient.put(`/contract/${params.contract_id}`, {
                ...contract,
            });
            console.log(res);
            toast.success('Xác Nhận Thành Công', {
                onClose: () => {
                    window.location.reload();
                }
            });
            setContract(INITIAL_DATA);
        } catch (error) {
            console.log('Error');
        }
    }


    return (
        <>
            <SideBar />

            <section className="home-section">

                <Header />

                <h1 className="heading mt-16"><span>Chi Tiết Đặt Xe</span></h1>
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {/* <!-- Start coding here --> */}
                    <div className="bg-white rounded">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-96">
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
                                    <a href={`/admin/contract/${contract._id}/info`} className="flex items-center justify-center cursor-pointer">
                                        <i className="fa-regular fa-eye mr-1"></i>
                                        Thông Tin
                                    </a>
                                    <button id='createProductModal-button' data-modal-toggle='createProductModal' type="button" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2 bg-gray-500">
                                        <i className="fa-solid fa-plus mr-1"></i>
                                        Thêm Thông Tin
                                    </button>
                                    <button type="button" id="updateProductModalButton" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2 bg-green-500">
                                        <i className="fa-solid fa-check mr-1"></i>
                                        Xác Nhận
                                    </button>
                                    <button type="button" id="updateProductModalButton" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2 bg-red-500">
                                        <i className="fa-solid fa-x mr-1"></i>
                                        Từ Chối
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-orange-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Người Thuê</th>
                                        <th scope="col" className="px-4 py-3">SĐT</th>
                                        <th scope="col" className="px-4 py-3">Thời Gian</th>
                                        <th scope="col" className="px-4 py-3">Địa Điểm</th>
                                        <th scope="col" className="px-4 py-3">Số Lượng</th>
                                        <th scope="col" className="px-4 py-3">Trạng Thái</th>
                                        <th scope="col" className="px-4 py-3">Tổng Giá Thuê</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">{contract.user?.full_name}</td>
                                        <td className="px-4 py-3">{contract.user?.phone_number}</td>
                                        <td className="px-4 py-3">
                                            {Format_DateTime(contract.start_date)}
                                            {Format_DateTime(contract.end_date)}
                                        </td>
                                        <td className="px-4 py-3">{contract.pickup_address}</td>
                                        <td className="px-4 py-3">{contract.bikes.length}</td>
                                        <td className="px-4 py-3">{TextColor(contract.status)}</td>
                                        <td className="px-4 py-3">{Format_Currency(contract.total_price)}</td>

                                    </tr>
                                </tbody>
                            </table>
                            <table className="w-full text-sm text-left">
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
                            </table>
                            <table className="w-full text-sm text-left">
                                {
                                    contractInfo.map((element, index) => (
                                        <Fragment key={index}>
                                            <thead className="text-xs uppercase">
                                                <tr>
                                                    <th scope="col" className="px-4 py-3">Thông tin</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b dark:border-gray-700">
                                                    <td className="px-4 py-3">
                                                        <img className='h-28' src={`http://localhost:8888/uploads/${(element as { imgUrl: string })?.imgUrl}`} alt="" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Fragment>
                                    ))
                                }
                            </table>
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
            {/* <!-- Create modal --> */}
            <div id="createProductModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b">
                            <h3 className="text-lg font-semibold">Thêm Thông Tin Người Thuê</h3>
                            <button type="button" className="text-red-700" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form onSubmit={handleAddSubmit} encType='multipart/form-data'>
                            <input
                                type="file"
                                name="imgUrl"
                                accept="image/*"
                                id="imgUrl"
                                className="border rounded-lg block w-full p-2.5"
                                required
                                onChange={(e) => {
                                    if (e.target.files) {
                                        updateFields({ imgUrl: e.target.files[0] });
                                    }
                                }}
                            />
                            <button type="submit" className="border bg-green-500 font-medium rounded-lg text-sm px-4 py-2">
                                <i className="fa-solid fa-plus mr-1"></i>
                                Thêm Mới
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Update modal --> */}
            <div id="updateProductModal" aria-hidden="true" className="z-40 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-2 rounded-t border-b">
                            <h3 className="text-lg font-semibold">Xác Nhận Thuê</h3>
                            <button type="button" className="text-red-700" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form onSubmit={updateContract}>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    Họ Tên : {contract.user?.full_name}
                                </div>
                                <div>
                                    Email : {contract.user?.email}
                                </div>
                            </div>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    Số Điện Thoại : {contract.user?.phone_number}
                                </div>
                                <div className="flex">
                                    Địa Chỉ : {contract.user?.address}
                                </div>
                            </div>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    Địa Chỉ Nhận Xe : {contract.pickup_address}
                                </div>
                                <div>
                                    Địa Chỉ Trả Xe : {contract.return_address}
                                </div>
                            </div>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div >
                                    Ngày Thuê : {Format_DateTime(contract.start_date)}
                                </div>
                                <div>
                                    Ngày Trả : {Format_DateTime(contract.end_date)}
                                </div>
                            </div>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div >
                                    Tổng Giá Thuê : {Format_Currency(contract.total_price)}
                                </div>
                                <label htmlFor="status"></label>
                                <select
                                    defaultValue='default'
                                    name="status"
                                    id="status"
                                    required
                                    onChange={e => {
                                        updateFields({
                                            status: e.target.value,
                                        })
                                    }}

                                >
                                    <option value="default" disabled>-- Thay Đổi Trạng Thái --</option>
                                    <option value="APPROVED">APPROVED</option>
                                    <option value="PROCESSING">PROCESSING</option>
                                    <option value="COMPLETED">COMPLETED</option>
                                    <option value="REJECTED">REJECTED</option>
                                </select>
                            </div>

                            <button type="submit" className="border bg-green-500 font-medium rounded-lg text-sm px-4 py-2">
                                <i className="fa-solid fa-check mr-1"></i>
                                Xác Nhận
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
