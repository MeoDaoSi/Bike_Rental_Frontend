import React from 'react'
// import { useNavigate } from 'react-router-dom';

export const Info = () => {

    // const Navigate = useNavigate();

    return (
        <>
            <div className="flex flex-row min-h-screen justify-center px-4 py-4">
                <div className="bg-gray-100 border w-2/3 flex flex-col">
                    <h2 className="mx-3 my-3 border-b-4 inline-block text-xl">THÔNG TIN</h2>
                    <div className="content m-4" >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">sdsd</span>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Ngày nhận xe</span>
                                <input type="date" name="pickup_time" id="pickup_time" />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" name="email" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" name="phone" id="phone" placeholder="Enter your number" />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" name="password" id="password" placeholder="Enter your password" />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="password" name="cPassword" id="cPassword" placeholder="Confirm your password" />
                            </div>
                        </div>
                        <div className="text-right my-4 mx-6">
                            <button className="btn">Bước tiếp theo</button>
                        </div>
                    </div>
                </div>
                <div className="ml-6 bg-gray-100 border w-96 flex flex-col">
                    <div className="h-64 mx-4 my-4 border">
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold">Thông tin nhận xe</p>
                            <p className="text-sm mt-1">ssss</p>
                            <p className="text-sm mt-1">Vị Trí: ssss</p>
                        </div>
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold">Thông tin trả xe</p>
                            <p className="text-sm mt-1">ssss</p>
                            <p className="text-sm mt-1">Vị Trí: ssss</p>
                        </div>
                    </div>
                    <div className="h-48 mx-4 my-4 border">
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold bg-orange-400">Giỏ hàng</p>
                            <p className="mt-3 mx-2 text-xl font-bold bg-white">Giỏ hàng - 9999999</p>
                            <p className="mt-3 mx-2 text-xl font-bold bg-white">Giỏ hàng - 9999999</p>
                            <p className="mt-3 mx-2 text-xl font-bold bg-white">Giỏ hàng - 9999999</p>
                            <h2 className="my-3 border-t-4 text-xl">THUÊ XE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
