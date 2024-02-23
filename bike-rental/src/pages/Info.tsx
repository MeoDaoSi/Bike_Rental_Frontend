import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Info = () => {

    const Navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('1221');

        Navigate('/reservation/confirm');
    }
    return (
        <>
            <div className="flex flex-row min-h-screen justify-between mx-12 my-12">
                <div className="bg-gray-100 border w-2/3 flex flex-col mt-24">
                    <h2 className="mx-3 my-3 border-b-4 inline-block text-xl">THÔNG TIN</h2>
                    <div className="content m-4" >
                        <form method="POST" onSubmit={handleSubmit}>
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
                        </form>
                    </div>
                </div>
                <div className="mt-24 ml-6 bg-gray-100 border w-96 flex flex-col">
                    <div className="h-96 mx-4 my-4 border">
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold">Thông tin nhận xe</p>
                            <p className="text-sm mt-1">ssssssssss</p>
                            <p className="text-sm mt-1">Vị Trí: ssssssssss</p>
                        </div>
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold">Thông tin trả xe</p>
                            <p className="text-sm mt-1">ssssssssss</p>
                            <p className="text-sm mt-1">Vị Trí: ssssssssss</p>
                        </div>
                        <div className="mx-4 mt-8 ">
                            <p className="mt-3 text-xl font-bold">Thông tin thuê xe</p>
                            <p className="text-sm mt-1">ssssssssss</p>
                            <p className="text-sm mt-1">Giá: ssssssssssice_per_day/Ngày</p>
                        </div>
                    </div>
                    <div className="h-80 mx-4 my-4 border">
                        <div className="mx-4 mt-8 ">
                            <span className="mt-3 text-xl font-bold">Tổng cộng</span>
                            <span className="text-xl mt-1 text-right">ssssssssss</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
