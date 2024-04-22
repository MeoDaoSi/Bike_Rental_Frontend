// import { useNavigate } from 'react-router-dom';
import UserData from "../Admin/User/User";
import BikeData from "../Admin/Bike/ListBike";
import { Fragment } from "react";
import { Header } from "../../components/Header";


type FormProps = UserData & {
    pickup_address: string,
    return_address: string,
    start_date: string,
    end_date: string,
    cart: BikeData[],
    duration: number,
    total_price: number
    updateFields: (fields: Partial<UserData>) => void,
}

export const Info = ({
    start_date,
    end_date,
    pickup_address,
    return_address,
    updateFields,
    cart,
    duration,
    total_price,
    full_name,
    email,
    birth_date,
    phone_number,
    address
}: FormProps) => {

    console.log(full_name);


    return (

        <>
            <Header />
            <div className="flex flex-row min-h-screen justify-center px-4">
                <div className="bg-gray-100 border w-2/3 flex flex-col">
                    <h2 className="mx-3 my-3 border-b-4 inline-block text-xl">THÔNG TIN</h2>
                    <div className="content mx-4" >
                        <div className="user-details">
                            <div className="input-box">
                                <label htmlFor='full_name' className="details">Họ Và Tên</label>
                                <input
                                    type="text"
                                    placeholder="Nhập Họ Và Tên"
                                    id="full_name"
                                    name="full_name"
                                    value={full_name || ""}
                                    required
                                    onChange={e => updateFields({ full_name: e.target.value })}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="birth_date" className="details">Ngày Sinh</label>
                                <input
                                    type="date"
                                    name="birth_date"
                                    id="birth_date"
                                    value={birth_date || "2004-01-01"}
                                    required
                                    onChange={e => updateFields({ birth_date: e.target.value })}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="email" className="details">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email || ""}
                                    placeholder="Nhập Email"
                                    required
                                    onChange={e => updateFields({ email: e.target.value })}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="phone_number" className="details">Số Điện Thoại</label>
                                <input
                                    type="number"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    name="phone_number"
                                    value={phone_number}
                                    id="phone_number"
                                    placeholder="Nhập SĐT"
                                    required
                                    onChange={e => updateFields({ phone_number: Number(e.target.value) })}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="address" className="details">Địa Chỉ</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={address}
                                    id="address"
                                    placeholder="Nhập Địa Chỉ"
                                    required
                                    onChange={e => updateFields({ address: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
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
                                cart.map((bike, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div className='flex mt-3 mx-2'>
                                                <p className="bg-white mr-2">{bike.model} - {bike.price} - x1</p>
                                            </div>

                                        </Fragment>
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
