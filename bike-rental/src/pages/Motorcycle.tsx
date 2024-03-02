// import React, { ReactElement, ReactHTMLElement } from 'react';
import motorcycle from '../assets/images/motorcycle.png';
export const Motorcycle = () => {


    function handleClick(motocycleId: object) {
        return function () {
            console.log(motocycleId);
            
        }

    }


    return (
        <>
            <div className="flex flex-row min-h-screen justify-center px-4 py-4">
                <div className=" bg-gray-100 border w-2/3 flex flex-col">
                    <h2 className="mx-3 my-3 border-b-4 inline-block text-xl">THUÊ XE</h2>

                    <div className="flex border mx-3 my-3 justify-between">

                        <div className="flex flex-row">
                            <div>
                                <img className="p-8 object-contain h-48 w-80" src={motorcycle} alt="product image" />
                            </div>

                            <div className="flex flex-col my-3 ml-6">
                                <p className="mt-3 text-3xl">ssss</p>
                                <p className="text-sm mt-1">- Mũ bảo hiểm 1/2 </p>
                                <p className="text-sm mt-1">- Áo mưa 1 lần</p>
                                <p className="text-sm mt-1">- Bảo hiểm xe máy</p>
                                <p className="text-sm mt-1">- Đăng ký xe photo</p>
                                <p className="text-sm mt-1">- Dịch vụ cứu hộ</p>
                            </div>

                        </div>



                        <div className="my-3">
                            <div className="flex flex-col justify-end">
                                <div className="mr-3 mt-3 font-medium text-right">ssss/Ngày</div>
                                <div className="mr-3 my-1 text-right">
                                    không bao gồm thuế và bảo hiểm
                                </div>

                                <div className="mr-3 my-1 text-right">
                                    <button type='button' onClick={handleClick({ id: 1 })} className="btn">CHỌN</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex border mx-3 my-3 justify-between">

                        <div className="flex flex-row">
                            <div>
                                <img className="p-8 object-contain h-48 w-80" src={motorcycle} alt="product image" />
                            </div>

                            <div className="flex flex-col my-3 ml-6">
                                <p className="mt-3 text-3xl">ssss</p>
                                <p className="text-sm mt-1">- Mũ bảo hiểm 1/2 </p>
                                <p className="text-sm mt-1">- Áo mưa 1 lần</p>
                                <p className="text-sm mt-1">- Bảo hiểm xe máy</p>
                                <p className="text-sm mt-1">- Đăng ký xe photo</p>
                                <p className="text-sm mt-1">- Dịch vụ cứu hộ</p>
                            </div>

                        </div>



                        <div className="my-3">
                            <div className="flex flex-col justify-end">
                                <div className="mr-3 mt-3 font-medium text-right">ssss/Ngày</div>
                                <div className="mr-3 my-1 text-right">
                                    không bao gồm thuế và bảo hiểm
                                </div>

                                <div className="mr-3 my-1 text-right">
                                    <button onClick={handleClick({ id: 1 })} className="bg-yellow-400 font-medium  px-5 py-2.5 text-center">THUÊ XE</button>
                                </div>
                            </div>
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
                    <div className="h-48 mx-4 my-4">
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold bg-orange-400">Giỏ hàng</p>
                            <p className="mt-3 mx-2 text-xl font-bold bg-white">Giỏ hàng - 9999999</p>
                            <p className="mt-3 mx-2 text-xl font-bold bg-white">Giỏ hàng - 9999999</p>
                            <p className="mt-3 mx-2 text-xl font-bold bg-white">Giỏ hàng - 9999999</p>
                            <h2 className="my-3 border-t-4 text-xl">Tổng giá thuê: 999999</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
