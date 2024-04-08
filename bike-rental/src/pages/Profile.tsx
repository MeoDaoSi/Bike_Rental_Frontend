import { useEffect, useContext } from 'react'
import AuthContext from '../utils/authContext'

export const Profile = () => {

    const { user } = useContext(AuthContext);

    console.log(user);


    return (
        <>
            <div className='flex mt-28 bg-gray-200 justify-center'>
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
                                <div className='m-2 pl-2'>
                                    <button>Thông Tin</button>
                                </div>
                                <div className='m-2'>
                                    <button>Lịch Sử Thuê</button>
                                </div>

                            </nav>
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

                                    <tr className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">ssss</td>
                                        <td className="px-4 py-3">sss</td>
                                        <td className="px-4 py-3">sss</td>
                                        <td className="px-4 py-3">ssss</td>
                                        <td className="px-4 py-3 text-2xl">
                                            sssss
                                        </td>
                                        <td className="px-4 py-3 text-2xl">
                                            sssssss

                                        </td>
                                        <td className="px-4 py-3 flex items-center justify-end">
                                            <h1>ssss</h1>

                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
