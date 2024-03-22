// import React, { ReactElement, ReactHTMLElement } from 'react';
import { useEffect, useState } from 'react';
// import motorcycle from '../assets/images/motorcycle.png';
import BikeData from './ListBike';
import { axiosClient } from '../apis/axiosClient';

type array = {
    cart: BikeData[],
    duration: number,
    total_price: number
}

type BikeFormProps = array & {
    pickup_id: string, // save _id of branch
    pickup_address: string,
    return_address: string,
    start_date: string,
    end_date: string,

    updateFields: (fields: Partial<array>) => void,
}

const INITIAL_DATA: BikeData[] = [];

export const Motorcycle = ({
    pickup_id,
    pickup_address,
    return_address,
    start_date,
    end_date,
    updateFields,
    cart,
    duration,
    total_price
}: BikeFormProps) => {

    const [bikes, setBikes] = useState(INITIAL_DATA)

    function handleClick(bike: BikeData) {
        if (!cart.some((item) => item._id === bike._id)) {
            return function () {
                updateFields({ cart: [...cart, bike], total_price: total_price + bike.price * duration });
            }
        }
    }

    function removeCart(bike: BikeData) {
        return function () {
            updateFields({ cart: cart.filter((item) => item._id !== bike._id), total_price: total_price - bike.price * duration });
        }
    }


    useEffect(() => {

        duration = (new Date(end_date).getTime() - new Date(start_date).getTime()) / (1000 * 3600 * 24);
        updateFields({ duration: duration });

        const getData = async () => {
            try {
                const data = await axiosClient.get(
                    `/branch/bike/${pickup_id}/book?${start_date}=${start_date}&${end_date}=${end_date}`
                );
                console.log(data.data);
                setBikes(data.data);
            } catch (error) {
                alert('error');
            }
        }
        getData();
    }, [])


    return (
        <>
            <div className="flex flex-row min-h-screen justify-center px-4 py-4">
                <div className=" bg-gray-100 border w-2/3 flex flex-col">
                    <h2 className="mx-3 my-3 border-b-4 inline-block text-xl">THUÊ XE</h2>

                    {
                        bikes.map((bike) => {
                            return (
                                <div key={bike._id} className="flex border-2 mx-3 my-3 justify-between">

                                    <div className="flex flex-row">
                                        <div>
                                            <img className="p-8 object-contain w-96 h-64" src={bike.imgUrl} alt="product image" />
                                        </div>

                                        <div className="flex flex-col my-3 ml-6">
                                            <p className="mt-3 text-2xl text-orange-500">{bike.model}</p>
                                            <p className="text-sm mt-1">- Mũ bảo hiểm 1/2 </p>
                                            <p className="text-sm mt-1">- Áo mưa 1 lần</p>
                                            <p className="text-sm mt-1">- Bảo hiểm xe máy</p>
                                            <p className="text-sm mt-1">- Đăng ký xe photo</p>
                                            <p className="text-sm mt-1">- Dịch vụ cứu hộ</p>
                                        </div>

                                    </div>



                                    <div className="my-3">
                                        <div className="flex flex-col justify-end">
                                            <div className="text-orange-500 mr-3 mt-3 font-medium text-right">{bike.price}/Ngày</div>
                                            <div className="mr-3 my-1 text-right">
                                                không bao gồm thuế và bảo hiểm
                                            </div>

                                            <div className="mr-3 my-1 text-right">
                                                <button type='button' onClick={handleClick(bike)} className="bg-black btn">CHỌN</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="ml-6 bg-gray-100 border w-96 flex flex-col">
                    <div className="h-64 mx-4 my-4 border">
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold">Thông tin nhận xe</p>
                            <p className="text-sm mt-1">Từ Ngày: {start_date}</p>
                            <p className="text-sm mt-1">Tại Chi Nhánh: {pickup_address}</p>
                        </div>
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold">Thông tin trả xe</p>
                            <p className="text-sm mt-1">Đến Ngày: {end_date}</p>
                            <p className="text-sm mt-1">Tại Chi Nhánh: {return_address}</p>
                        </div>
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold">Thời Gian(Ngày)</p>
                            <p className="text-xl mt-1">{duration}</p>
                        </div>
                    </div>
                    <div className="h-48 mx-4 my-4">
                        <div className="mx-4 my-2 ">
                            <p className="mt-3 text-xl font-bold bg-orange-400">Giỏ hàng</p>
                            {
                                cart.map((bike) => {
                                    return (
                                        <>
                                            <div className='flex mt-3 mx-2'>
                                                <p key={bike._id} className="bg-white mr-2">{bike.model} - {bike.price} - x1</p>
                                                <button type='button' onClick={removeCart(bike)} className='text-red-500'>x</button>
                                            </div>

                                        </>
                                    )
                                })
                            }
                            <h2 className="my-3 border-t-4 text-xl">Tổng giá thuê: {total_price}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
