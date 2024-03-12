import React from 'react'
import { Modal } from 'flowbite';
import { options } from '../helpers/optionModel'

export const Test = () => {


    return (
        <>
            <section className="mt-28 home-section">
                <h1 className="heading"><span>Danh Sách Cửa Hàng</span></h1>
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
                                <button type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="flex border items-center justify-center font-medium rounded-lg text-sm px-4 py-2">
                                    <i className="fa-solid fa-plus mr-1"></i>
                                    Thêm
                                </button>
                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <button id="filterDropdownButton" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">

                                        Filter
                                        icon
                                    </button>
                                    <div id="filterDropdown" className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Category</h6>
                                        <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                            <li className="flex items-center">
                                                <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input id="fitbit" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Fitbit (56)</label>
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
                                        <th scope="col" className="px-4 py-4">Product name</th>
                                        <th scope="col" className="px-4 py-3">Category</th>
                                        <th scope="col" className="px-4 py-3">Brand</th>
                                        <th scope="col" className="px-4 py-3">Description</th>
                                        <th scope="col" className="px-4 py-3">Price</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">TV/Monitor</td>
                                        <td className="px-4 py-3">BenQ</td>
                                        <td className="px-4 py-3">BenQ</td>
                                        <td className="px-4 py-3 max-w-[12rem] truncate">What is a product description? A product description describes a product.</td>
                                        <td className="px-4 py-3">$499</td>
                                        <td className="px-4 py-3 flex items-center justify-end">
                                            <button id="apple-imac-20-dropdown-button" data-dropdown-toggle="apple-imac-20-dropdown">
                                                <i className="fa-solid fa-bars text-xl"></i>
                                            </button>
                                            <div id="apple-imac-20-dropdown" className="hidden z-10 w-44 bg-white rounded border">
                                                <ul className="py-1 text-sm" aria-labelledby="apple-imac-20-dropdown-button">
                                                    <li>
                                                        <button type='button' data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className='m-2'>
                                                            <i className="fa-solid fa-pen-to-square mr-1"></i>
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" data-modal-target="readProductModal" data-modal-toggle="readProductModal" className="m-2">
                                                            <i className="fa-solid fa-eye mr-1"></i>
                                                            Preview
                                                        </button>
                                                    </li>
                                                    <li className='text-red-700'>
                                                        <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="m-2">
                                                            <i className="fa-solid fa-trash mr-1"></i>
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">TV/Monitor</td>
                                        <td className="px-4 py-3">BenQ</td>
                                        <td className="px-4 py-3">BenQ</td>
                                        <td className="px-4 py-3 max-w-[12rem] truncate">What is a product description? A product description describes a product.</td>
                                        <td className="px-4 py-3">$499</td>
                                        <td className="px-4 py-3 flex items-center justify-end">
                                            <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown">
                                                <i className="fa-solid fa-bars text-xl"></i>
                                            </button>
                                            <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded border">
                                                <ul className="py-1 text-sm" aria-labelledby="apple-imac-27-dropdown-button">
                                                    <li>
                                                        <button type='button' data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className='m-2'>
                                                            <i className="fa-solid fa-pen-to-square mr-1"></i>
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" data-modal-target="readProductModal" data-modal-toggle="readProductModal" className="m-2">
                                                            <i className="fa-solid fa-eye mr-1"></i>
                                                            Preview
                                                        </button>
                                                    </li>
                                                    <li className='text-red-700'>
                                                        <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="m-2">
                                                            <i className="fa-solid fa-trash mr-1"></i>
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>

                                    </tr>
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
                            <h3 className="text-lg font-semibold">Thêm sản phẩm</h3>
                            <button type="button" className="text-red-700" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                                    <input type="text" name="name" id="name" className="border rounded-lg block w-full p-2.5" placeholder="Type product name" required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
                                    <input type="text" name="brand" id="brand" className="border rounded-lg block w-full p-2.5" placeholder="Product brand" required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
                                    <input type="text" name="brand" id="brand" className="border rounded-lg block w-full p-2.5" placeholder="Product brand" required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
                                    <input type="text" name="brand" id="brand" className="border rounded-lg block w-full p-2.5" placeholder="Product brand" required />
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
            {/* <!-- Update modal --> */}
            <div id="updateProductModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b">
                            <h3 className="text-lg font-semibold">Thêm sản phẩm</h3>
                            <button type="button" className="text-red-700" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal">
                                <i className="fa-solid fa-x text-xl"></i>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                                    <input type="text" name="name" id="name" className="border rounded-lg block w-full p-2.5" placeholder="Type product name" required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
                                    <input type="text" name="brand" id="brand" className="border rounded-lg block w-full p-2.5" placeholder="Product brand" required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
                                    <input type="text" name="brand" id="brand" className="border rounded-lg block w-full p-2.5" placeholder="Product brand" required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
                                    <input type="text" name="brand" id="brand" className="border rounded-lg block w-full p-2.5" placeholder="Product brand" required />
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
            {/* <!-- Read modal --> */}
            <div id="readProductModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                            <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                                <h3 className="font-semibold ">Apple iMac 27”</h3>
                                <p className="font-bold">$2999</p>
                            </div>
                            <div>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="readProductModal">
                                    Icon
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>
                        <dl><dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt><dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</dd><dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt><dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Electronics/PC</dd></dl>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <button type="button" className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Icon
                                    Edit
                                </button>
                                <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Preview</button>
                            </div>
                            <button type="button" className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                Icon
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Delete modal --> */}
            <div id="deleteModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 text-center bg-white rounded-lg">
                        <button type="button" className="text-red-700 absolute top-2.5 right-2.5 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="deleteModal">
                            <i className="fa-solid fa-x text-xl"></i>
                        </button>
                        <i className="fa-solid fa-trash text-2xl m-1"></i>
                        <p className="mb-4">Bạn Muốn Xóa Sản Phẩm Này?</p>
                        <div className="flex justify-center items-center space-x-4">
                            <button data-modal-toggle="deleteModal" type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Không</button>
                            <button type="submit" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">Đồng Ý</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
