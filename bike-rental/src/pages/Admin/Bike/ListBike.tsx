import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../../apis/axiosClient';
import { options } from '../../../helpers/optionModel'
import { useParams } from 'react-router-dom';
import { Modal } from 'flowbite';
import { SideBar } from '../../../components/SideBar';
import { Header } from '../../../components/Admin/Header';

export default interface BikeData {
    _id: string,
    brand: string,
    model: string,
    imgUrl: string,
    year: string,
    color: string,
    license_plate: string,
    price: number,
    status: string,
    type: string,
    // QR_code: string,
}

// type LocationFormProps = LocationData & {
//     updateFields: (fields: Partial<LocationData>) => void
// }

const INITIAL_DATA: BikeData = {
    _id: '',
    brand: '',
    model: '',
    imgUrl: '',
    year: '',
    color: '',
    license_plate: '',
    price: 0,
    status: 'AVAILABLE',
    type: '',
    // QR_code: '',
}

type FilterData = {
    status?: string
}

const initFilter: FilterData[] = []

export const ListBike = () => {

    const params = useParams();
    const [bike, setBike] = useState(INITIAL_DATA);
    const [selectedCategories, setSelectedCategories] = useState(initFilter);
    const [bikes, setBikes] = useState([
        INITIAL_DATA
    ]);

    const updateFields = (newFields: Partial<BikeData>) => {
        setBike(prev => ({ ...prev, ...newFields }))
    }

    const updateField = (newField: FilterData) => {
        setSelectedCategories([...selectedCategories, newField]);
    }
    const removeField = (field: FilterData) => {
        setSelectedCategories(selectedCategories.filter((category) => category.status !== field.status))
    }

    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axiosClient.post(`/branch/bike/${params.branch_id}`, {
                ...bike,
            });
            console.log(res);
            alert('Thêm Thành Công!')
        } catch (error) {
            alert('Error');
        }
    }

    const addModelButton = () => {
        const $modal = document.getElementById('createProductModal');


        const modal = new Modal($modal, options);

        modal.show();

    }

    useEffect(() => {
        const fetch = async () => {
            const branch_id = params.branch_id;
            const searchParams = new URLSearchParams();
            selectedCategories.forEach(category => {
                if (category.status)
                    searchParams.append('status', category.status);
            });

            try {
                const res = await axiosClient.get(`branch/bike/${branch_id}?${searchParams}`);


                console.log(res);
                setBikes(res.data);

            } catch (error) {
                alert('Error');
            }
        }
        fetch();
    }, [selectedCategories])

    return (
        <>
            <SideBar />

            <section className="home-section">

                <Header />

                <h1 className="heading mt-14"><span>Danh Sách Xe</span></h1>
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {/* <!-- Start coding here --> */}
                    <div className="bg-white rounded">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-96">
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
                                <div>
                                    Tổng Xe: {bikes.length}
                                </div>
                                <button onClick={addModelButton} type="button" id="createProductModalButton" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2 bg-green-500">
                                    <i className="fa-solid fa-plus mr-1"></i>
                                    Thêm
                                </button>

                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium bg-white rounded-lg border border-gray-200 " type="button">
                                        <i className="fa-solid fa-filter mr-2"></i>
                                        Filter
                                        <i className="fa-solid fa-chevron-down ml-2"></i>
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
                                                    value="AVAILABLE"
                                                    className="w-4 h-4 rounded 0"
                                                    onChange={(e) => {
                                                        if (e.target.checked)
                                                            return updateField({ status: e.target.value })
                                                        else
                                                            return removeField({ status: e.target.value })
                                                    }}
                                                />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium">Có Sẵn</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input
                                                    id="brand_2"
                                                    type="checkbox"
                                                    value="UNAVAILABLE"
                                                    className="w-4 h-4 rounded 0"
                                                    onChange={(e) => {
                                                        if (e.target.checked)
                                                            return updateField({ status: e.target.value })
                                                        else
                                                            return removeField({ status: e.target.value })
                                                    }}
                                                />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium">Đã Thuê</label>
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
                                        <th scope="col" className="px-4 py-3">Mẫu Mã</th>
                                        <th scope="col" className="px-4 py-3">Màu Sắc</th>
                                        <th scope="col" className="px-4 py-3">Giá Thuê</th>
                                        <th scope="col" className="px-4 py-3">Trạng Thái</th>
                                        <th scope="col" className="px-4 py-3">Loại Xe</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        bikes.map((bike, index) =>
                                        (
                                            <tr className="border-b dark:border-gray-700" key={index + 1}>
                                                <td className="px-4 py-3">{index + 1}</td>
                                                <td className="px-4 py-3">{bike.model}</td>
                                                <td className="px-4 py-3">{bike.color}</td>
                                                <td className="px-4 py-3">{bike.price}</td>
                                                <td className="px-4 py-3 text-2xl">
                                                    {
                                                        bike.status == 'AVAILABLE' ? <i className="bg-green-500 fa-regular fa-circle"></i> : <i className="bg-red-500 fa-regular fa-circle"></i>
                                                    }
                                                </td>
                                                <td className="px-4 py-3 text-2xl">
                                                    {
                                                        bike.type == 'MOTORCYCLE' ? <i className="fa-solid fa-motorcycle"></i> : <i className=" fa-solid fa-bicycle"></i>
                                                    }

                                                </td>
                                                <td className="px-4 py-3 flex items-center justify-end">
                                                    <a className='border rounded p-2' href={`/admin/branch/${params.branch_id}/bike/${bike._id}`}>Chi tiết</a>

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
            {/* <!-- End block --> */}
            {/* <!-- Create modal --> */}
            <div id="createProductModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b">
                            <h3 className="text-lg font-semibold">Thêm Xe</h3>
                            <button type="button" className="text-red-700" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form onSubmit={handleAddSubmit}>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="brand" className="block mb-1 text-sm font-medium">Hãng xe</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        id="brand"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Hãng xe"
                                        required
                                        onChange={(e) => { updateFields({ brand: e.target.value }) }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="model" className="block mb-1 text-sm font-medium">Mẫu Mã</label>
                                    <input
                                        type="text"
                                        name="model"
                                        id="model"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Mẫu Mã"
                                        required
                                        onChange={(e) => { updateFields({ model: e.target.value }) }}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="price" className="block mb-1 text-sm font-medium">Giá Thuê</label>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Giá Thuê"
                                        required
                                        onChange={(e) => { updateFields({ price: Number(e.target.value) }) }}
                                    />
                                </div>
                                <div className="flex">
                                    <div className="mr-2">
                                        <label htmlFor="color" className="block mb-1 text-sm font-medium">Màu Sắc</label>
                                        <select
                                            name="color"
                                            id="color"
                                            required
                                            onChange={(e) => { updateFields({ color: e.target.value }) }}
                                            className="border rounded-lg block p-2.5"
                                        >
                                            <option value="RED">Đỏ</option>
                                            <option value="BLACK">Đen</option>
                                            <option value="WHITE">Trắng</option>
                                            <option value="BLUE">Xanh</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="type" className="block mb-1 text-sm font-medium">Loại Xe</label>
                                        <select
                                            name="type"
                                            id="type"
                                            required
                                            onChange={(e) => { updateFields({ type: e.target.value }) }}
                                            className="border rounded-lg block p-2.5"
                                        >
                                            <option value="MOTORCYCLE">Xe Máy</option>
                                            <option value="BICYCLE">Xe Đạp</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="year" className="block mb-1 text-sm font-medium">Năm Sản Xuất</label>
                                    <input
                                        type="text"
                                        name="year"
                                        id="year"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Năm Sản Xuất"
                                        required
                                        onChange={(e) => { updateFields({ year: e.target.value }) }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="license_plate" className="block mb-1 text-sm font-medium">Biển số Xe</label>
                                    <input
                                        type="text"
                                        name="license_plate"
                                        id="license_plate"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Biển số Xe"
                                        onChange={(e) => { updateFields({ license_plate: e.target.value }) }}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="imgUrl" className="block mb-1 text-sm font-medium">Hình Ảnh</label>
                                    <input
                                        type="text"
                                        name="imgUrl"
                                        id="imgUrl"
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Link Ảnh Xe"
                                        required
                                        onChange={(e) => { updateFields({ imgUrl: e.target.value }) }}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="border bg-green-500 font-medium rounded-lg text-sm px-4 py-2">
                                <i className="fa-solid fa-plus mr-1"></i>
                                Thêm Mới
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
