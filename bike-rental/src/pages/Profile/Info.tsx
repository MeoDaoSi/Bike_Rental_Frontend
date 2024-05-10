import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../utils/authContext'
import { Header } from '../../components/Header';
import UserData from '../Admin/User/User';
import { options } from '../../helpers/optionModel';
import { Modal } from 'flowbite';
import { axiosClient } from '../../apis/axiosClient';
import { toast } from 'react-toastify';
import { Format_DateTime } from '../../helpers/Format_DateTime';

export const Info = () => {

    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    const INIT_DATA: Partial<UserData> = {
        _id: user._id || '',
        full_name: user.full_name || '',
        email: user.email || '',
        birth_date: user.birth_date || '',
        phone_number: user.phone_number || '',
        address: user.address || ''
    }
    console.log(INIT_DATA);

    const [userInfo, setUserInfo] = useState(INIT_DATA)

    const updateFields = (newFields: Partial<UserData>) => {
        setUserInfo(prev => ({ ...prev, ...newFields }))
    }

    const updateinfo = async (e: any) => {
        e.preventDefault();

        try {
            console.log(userInfo);

            console.log(userInfo._id);


            await axiosClient.put(`user/${userInfo._id}`, userInfo)

            toast.success('Cập nhật thông tin thành công', {
                onClose: () => {
                    window.location.reload();
                }
            });
        } catch (error) {
            toast.error('Cập nhật thông tin thất bại', {
                onClose: () => {
                    window.location.reload();
                }
            });
        }

    }

    console.log(userInfo);

    const openModal = () => {
        const $modal = document.getElementById('updateProductModal');


        const modal = new Modal($modal, options);

        modal.show();

    }


    return (
        <>
            <Header />
            <div className='flex mt-24 bg-gray-200 justify-center'>
                <div className='flex w-full justify-center'>
                    <div className='flex bg-white flex-col w-2/3 '>
                        <div className='relative flex flex-col justify-center'>
                            <img className='className="absolute object-contain' src="https://htmlstream.com/front-dashboard/assets/img/1920x400/img1.jpg" />
                            {/* z-10 absolute top-16 left-64 */}
                            <div className='flex justify-center relative'>
                                <img className="w-24 h-24 rounded-full items-center inline"
                                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                                    alt="Rounded avatar">
                                </img>
                                <div>
                                    <button onClick={openModal} className='hover:opacity-80 z-20' type="button" id="updateProductModalButton">
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                </div>
                            </div>
                            <div id="updateProductModal" aria-hidden="true" className="z-40 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative p-4 w-full max-w-2xl max-h-full">
                                    {/* <!-- Modal content --> */}
                                    <div className="relative p-4 bg-white rounded-lg">
                                        {/* <!-- Modal header --> */}
                                        <div className="flex justify-between items-center pb-4 mb-2 rounded-t border-b">
                                            <h3 className="text-lg font-semibold">Chỉnh Sử<a href=""></a>Thông tin</h3>
                                            <button type="button" className="text-red-700" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal">
                                                <i className="fa-solid fa-x text-xl"></i>
                                            </button>
                                        </div>
                                        {/* <!-- Modal body --> */}
                                        <form onSubmit={updateinfo}>
                                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                                <div>
                                                    <label htmlFor="full_name" className="block mb-1 text-sm font-medium">Họ Tên</label>
                                                    <input
                                                        type="text"
                                                        name="full_name"
                                                        id="full_name"
                                                        value={userInfo.full_name}
                                                        className="border rounded-lg block w-full p-2.5"
                                                        placeholder="Nhập Họ Tên"
                                                        required
                                                        onChange={(e) => { updateFields({ full_name: e.target.value }) }}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="birth_date" className="block mb-1 text-sm font-medium">Ngày Sinh</label>
                                                    <input
                                                        type="date"
                                                        name="birth_date"
                                                        id="birth_date"
                                                        value={(new Date(user.birth_date).getTime).toString() || "2004-01-01"}
                                                        className="border rounded-lg block w-full p-2.5"
                                                        required
                                                        onChange={(e) => { updateFields({ birth_date: e.target.value }) }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid gap-4 mb-2 sm:grid-cols-2">
                                                <div>
                                                    <label htmlFor="phone_number" className="block mb-1 text-sm font-medium">Số Điện Thoại</label>
                                                    <input
                                                        type="text"
                                                        name="phone_number"
                                                        id="phone_number"
                                                        value={userInfo.phone_number}
                                                        className="border rounded-lg block w-full p-2.5"
                                                        placeholder="Nhập Số Điện Thoại"
                                                        required
                                                        onChange={(e) => { updateFields({ phone_number: Number(e.target.value) }) }}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="address" className="block mb-1 text-sm font-medium">Địa Chỉ</label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        id="address"
                                                        value={userInfo.address}
                                                        className="border rounded-lg block w-full p-2.5"
                                                        placeholder="Nhập Địa Chỉ"
                                                        required
                                                        onChange={(e) => { updateFields({ address: e.target.value }) }}
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
                            <div className='flex justify-center mr-4 mt-2'>
                                <h1 className='text-2xl'>{user.full_name}</h1>
                            </div>

                        </div>
                        <div className='mt-4 text-gray-600 text-xl border-b'>
                            <nav className='flex'>
                                <div className='p-2 ml-2'>
                                    <button className='text-blue-600 border-b-4'>Thông Tin</button>
                                </div>
                                <div className='m-2'>
                                    <a href='/profile/history' className='cursor-pointer hover:border-b-4 hover:text-blue-600'>Lịch Sử Thuê</a>
                                </div>

                            </nav>
                            <div className='w-full flex justify-center my-8'>
                                <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg ">
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Họ và tên
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {user.full_name || 'Chưa cập nhật'}
                                                </dd>
                                            </div>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Ngày Sinh
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {Format_DateTime(user.birth_date) || 'Chưa cập nhật'}
                                                </dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Email
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {user.email || 'Chưa cập nhật'}
                                                </dd>
                                            </div>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Số Điện Thoại
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {user.phone_number || 'Chưa cập nhật'}
                                                </dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
                                                <dt className="text-sm font-medium text-gray-500 w-64">
                                                    Địa Chỉ
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {user.address || 'Chưa cập nhật'}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
