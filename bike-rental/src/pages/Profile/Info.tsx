import { useContext, useState } from 'react'
import AuthContext from '../../utils/authContext'
import { Header } from '../../components/Header';

export const Info = () => {

    const { user } = useContext(AuthContext);

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
                                    <button className='hover:opacity-80 z-20'>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
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
                                                    {user.birth_date || 'Chưa cập nhật'}
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
