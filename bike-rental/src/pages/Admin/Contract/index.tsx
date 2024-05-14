import { useState, useEffect } from 'react';
import { axiosClient } from '../../../apis/axiosClient';
import BikeData from '../Bike/ListBike';
import UserData from '../User/User';
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Admin/Header';
import { TextColor } from '../../../helpers/TextColor';

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
    createdAt: Date,
    payment: boolean,
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
    createdAt: new Date(),
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
    },
    payment: false

}

type FilterData = {
    status?: string
}

const initFilter: FilterData[] = []

export const Contract = () => {

    const [contract, setContract] = useState([INITIAL_DATA]);

    const updateFields = (newFields: Partial<ContractData>) => {
        setContract(prev => ({ ...prev, ...newFields }))
    }

    const [selectedCategories, setSelectedCategories] = useState(initFilter);

    const updateField = (newField: FilterData) => {
        setSelectedCategories([...selectedCategories, newField]);
    }
    const removeField = (field: FilterData) => {
        setSelectedCategories(selectedCategories.filter((category) => category.status !== field.status))
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
            const searchParams = new URLSearchParams();
            selectedCategories.forEach(category => {
                if (category.status)
                    searchParams.append('status', category.status);
            });
            console.log(searchParams);

            try {
                const res = await axiosClient.get(`/contract?${searchParams}`);
                console.log(res);
                setContract(res.data);

            } catch (error) {
                console.log('Error');
            }
        }
        fetchData();
    }, [selectedCategories]);


    return (
        <>
            <SideBar />

            <section className="home-section">

                <Header />

                <h1 className="heading mt-16"><span>Danh Sách Đặt Xe</span></h1>
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
                                    <div>
                                        Tổng số lượng: <span className="font-medium">{contract.length}</span>
                                    </div>
                                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2" type="button">
                                        <i className="fa-solid fa-filter mr-1"></i>
                                        Filter
                                    </button>
                                    <div id="filterDropdown" className="z-10 hidden w-56 p-3 bg-white rounded-lg">
                                        <div className='flex justify-between'>
                                            <h6 className="mb-3 text-sm font-medium">Category</h6>
                                            <button className=''>
                                                <h6 className="mb-3 text-sm font-medium">Clear</h6>
                                            </button>
                                        </div>
                                        <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                            <li className="flex items-center">
                                                <input
                                                    id="brand_1"
                                                    type="checkbox"
                                                    value="COMPLETED"
                                                    className="w-4 h-4 rounded 0"
                                                    onChange={(e) => {
                                                        if (e.target.checked)
                                                            return updateField({ status: e.target.value })
                                                        else
                                                            return removeField({ status: e.target.value })
                                                    }}
                                                />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium">COMPLETE</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input
                                                    id="brand_2"
                                                    type="checkbox"
                                                    value="PROCESSING"
                                                    className="w-4 h-4 rounded 0"
                                                    onChange={(e) => {
                                                        if (e.target.checked)
                                                            return updateField({ status: e.target.value })
                                                        else
                                                            return removeField({ status: e.target.value })
                                                    }}
                                                />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium">PROCESSING</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input
                                                    id="brand_2"
                                                    type="checkbox"
                                                    value="PENDING"
                                                    className="w-4 h-4 rounded 0"
                                                    onChange={(e) => {
                                                        if (e.target.checked)
                                                            return updateField({ status: e.target.value })
                                                        else
                                                            return removeField({ status: e.target.value })
                                                    }}
                                                />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium">PENDING</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input
                                                    id="brand_2"
                                                    type="checkbox"
                                                    value="REJECTED"
                                                    className="w-4 h-4 rounded 0"
                                                    onChange={(e) => {
                                                        if (e.target.checked)
                                                            return updateField({ status: e.target.value })
                                                        else
                                                            return removeField({ status: e.target.value })
                                                    }}
                                                />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium">REJECTED</label>
                                            </li>
                                        </ul>
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
                                        <th scope="col" className="px-4 py-3">Thanh Toán</th>
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
                                                <td className={`px-4 py-3`}>
                                                    {TextColor(e.status)}
                                                </td>
                                                {
                                                    e.payment ? <td className="px-4 py-3 text-green-500">Đã Thanh Toán</td> : <td className="px-4 py-3">Chưa Thanh Toán</td>
                                                }

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
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
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
                                        <i className="fa-solid fa-angle-left"></i>
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
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
