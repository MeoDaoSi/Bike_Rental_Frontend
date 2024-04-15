import { useState, useEffect } from 'react';
import { axiosClient } from '../../apis/axiosClient';
import BikeData from '../Admin/Bike/ListBike';
import UserData from '../Admin/User/User';

export default interface ContractData {
    _id: string,
    start_date: Date,
    end_date: Date,
    pickup_address: string,
    return_address: string,
    status: string,
    total_price: number,
    duration: number,
    type: string
    bikes: BikeData[],
    user?: Partial<UserData>,
    staff?: Partial<UserData>,
}

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

export const Contract = () => {

    const [contract, setContract] = useState([INITIAL_DATA]);

    const updateFields = (newFields: Partial<ContractData>) => {
        setContract(prev => ({ ...prev, ...newFields }))
    }

    // const handleAddSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axiosClient.post('/branch', branch);
    //         console.log(res);
    //         alert('Thêm Thành Công!')
    //     } catch (error) {
    //         alert('Error');
    //     }
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient.get('/contract');
                console.log(res);
                setContract(res.data);

            } catch (error) {
                console.log('Error');
            }
        }
        fetchData();
    }, []);


    return (
        <>
            {/* -----------------------Side Bar-------------------------- */}
            <div className="sidebar">
                <a href="/admin">
                    <div className="logo-details border-b">
                        <i className=''></i>
                        <span className='logo_name1'>Bike</span><span className="logo_name">Book</span>
                    </div>
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="admin/dashboard" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-table-columns text-white"></i>
                                <span className="allLinks_name">Dashboard</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/location" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-store text-white"></i>
                                <span className="allLinks_name">Chi Nhánh</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/user" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-users text-white"></i>
                                <span className="allLinks_name">Người Dùng</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/contract" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-file-contract text-white"></i>
                                <span className="allLinks_name">Hợp Đồng</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            {/* -----------------------Side Bar-------------------------- */}

            <section className="home-section">
                <nav className="">
                    <button className='mr-4'>
                        <i className="fa-solid fa-bell text-xl text-white"></i>
                    </button>
                    <button>
                        <img className="w-10 h-10 rounded-full"
                            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                            alt="Rounded avatar">
                        </img>
                    </button>

                </nav>
                <h1 className="heading mt-16"><span>Danh Sách Cửa Hàng</span></h1>
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
                                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2" type="button">
                                        <i className="fa-solid fa-filter mr-1"></i>
                                        Filter
                                    </button>
                                    <div id="filterDropdown" className="z-10 hidden w-56 rounded bg-gray-500">
                                        <h1>hello</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-orange-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-4">STT</th>
                                        <th scope="col" className="px-4 py-3">Email</th>
                                        <th scope="col" className="px-4 py-3">Xe Thuê</th>
                                        <th scope="col" className="px-4 py-3">Số Lượng</th>
                                        <th scope="col" className="px-4 py-3">Trạng Thái</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        contract.map((e, i) =>
                                        (
                                            <tr className="border-b dark:border-gray-700" key={i + 1}>
                                                <td className="px-4 py-3">{i + 1}</td>
                                                <td className="px-4 py-3">{e?.user?.email}</td>
                                                <td className="px-4 py-3">
                                                    {e.bikes.map((element, index) => (
                                                        <div key={index} className="">{element.model}</div>
                                                    ))}
                                                </td>

                                                <td className="px-4 py-3">{e.bikes.length}</td>
                                                <td className="px-4 py-3">{e.status}</td>
                                                <td className="px-4 py-3 flex justify-end">
                                                    <a className='border rounded p-2' href={`/admin/contract/${e._id}`}>Chi tiết</a>

                                                </td>

                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
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

        </>
    )
}