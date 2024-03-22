import React from 'react'

export const Profile = () => {
    return (
        <>
            <div className='flex mt-28 bg-gray-200 justify-center'>
                <div className='flex w-2/3 justify-center'>
                    <div className='flex bg-white flex-col w-2/3 '>
                        <div className='relative'>
                            <img className='className="absolute object-contain' src="https://htmlstream.com/front-dashboard/assets/img/1920x400/img1.jpg" />

                            <div className='z-10 absolute top-16 left-64'>
                                <img className="w-24 h-24 rounded-full"
                                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                                    alt="Rounded avatar">
                                </img>
                                <div>
                                    <button className='hover:opacity-80 z-20 bg-gray-100 rounded-full w-8 h-8 left-16 top-16 absolute'>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                </div>
                            </div>
                            <h1 className='text-2xl ml-52 pl-2 mt-12'>Nguyễn Văn A</h1>
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
                            <table>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
