import { useParams } from "react-router-dom";
import { useState, useEffect, FormEvent } from 'react';
import { axiosClient } from '../../../../apis/axiosClient';
import { SideBar } from "../../../../components/SideBar";
import { Header } from "../../../../components/Admin/Header";

type BikeData = {
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

export const Bike_Detail = () => {

    const [bike, setBike] = useState(INITIAL_DATA);
    const Params = useParams();

    const updateFields = (newFields: Partial<BikeData>) => {
        setBike(prev => ({ ...prev, ...newFields }))
    }

    const updateBike = async (e: FormEvent) => {
        e.preventDefault();
        const url = `/branch/bike/${Params.branch_id}/${Params.bike_id}`;
        try {
            await axiosClient.put(url, bike);
            alert('Chỉnh Sửa Thành Công!')
        } catch (error) {
            alert('Error')
        }
    }

    useEffect(() => {
        const getBike = async () => {
            const url = `/branch/bike/${Params.branch_id}/${Params.bike_id}`;
            const res = await axiosClient.get(url);
            console.log(res);

            setBike(res.data);


        }
        getBike()
    }, [])

    return (
        <>
            <SideBar />

            <section className="home-section">

                <Header />

                <h1 className="heading mt-16"><span>Chi Tiết Xe</span></h1>
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
                                <button type="button" id="updateProductModalButton" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2 bg-gray-500">
                                    <i className="fa-solid fa-pen-to-square mr-1"></i>
                                    Chỉnh sửa
                                </button>
                            </div>

                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-orange-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Hãng Xe</th>
                                        <th scope="col" className="px-4 py-3">Mẫu Mã</th>
                                        <th scope="col" className="px-4 py-3">Năm Sản Xuất</th>
                                        <th scope="col" className="px-4 py-3">Màu Sắc</th>
                                        <th scope="col" className="px-4 py-3">Biển Số Xe</th>
                                        <th scope="col" className="px-4 py-3">Trạng Thái</th>
                                        <th scope="col" className="px-4 py-3">Loại Xe</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-gray-700" >
                                        <td className="px-4 py-3">{bike.brand}</td>
                                        <td className="px-4 py-3">{bike.model}</td>
                                        <td className="px-4 py-3">{bike.year}</td>
                                        <td className="px-4 py-3">{bike.color}</td>
                                        <td className="px-4 py-3">{bike.license_plate}</td>
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

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End block --> */}
            {/* <!-- Update modal --> */}
            <div id="updateProductModal" aria-hidden="true" className="z-40 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-2 rounded-t border-b">
                            <h3 className="text-lg font-semibold">Chỉnh Sử<a href=""></a> sản phẩm</h3>
                            <button type="button" className="text-red-700" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form onSubmit={updateBike}>
                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="brand" className="block mb-1 text-sm font-medium">Hãng xe</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        id="brand"
                                        value={bike.brand}
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
                                        value={bike.model}
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
                                        value={bike.price}
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
                                            value={bike.color}
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
                                            value={bike.type}
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
                                        value={bike.year}
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
                                        value={bike.license_plate}
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Biển số Xe"
                                        required
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
                                        value={bike.imgUrl}
                                        className="border rounded-lg block w-full p-2.5"
                                        placeholder="Nhập Link Ảnh Xe"
                                        required
                                        onChange={(e) => { updateFields({ imgUrl: e.target.value }) }}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="border bg-gray-500 font-medium rounded-lg text-sm px-4 py-2">
                                <i className="fa-solid fa-plus mr-1"></i>
                                Chỉnh Sửa
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
