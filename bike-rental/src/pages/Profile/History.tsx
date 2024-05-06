import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import AuthContext from '../../utils/authContext'
import { Header } from '../../components/Header';
import { axiosClient } from '../../apis/axiosClient';
import ContractData from '../Admin/Contract';
import { Format_DateTime } from '../../helpers/Format_DateTime';
import { TextColor } from '../../helpers/TextColor';
import { Format_Currency } from '../../helpers/Format_Currency';

const INITIAL_DATA: ContractData = {
    _id: '',
    start_date: new Date(),
    end_date: new Date(),
    pickup_address: '',
    return_address: '',
    status: '',
    total_price: 0,
    duration: 0,
    type: '',
    bikes: [],
    createdAt: new Date(),
    payment: false
}

export const Profile = () => {

    const [contract, setContract] = useState([INITIAL_DATA]);
    const { user } = useContext(AuthContext);

    useLayoutEffect(() => {

        const getContractByUserId = async () => {
            const contract = await axiosClient.get(`/contract/profile/${user._id}`);
            setContract(contract.data);

        }
        getContractByUserId();
    }, [])


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
                                    <a href='/profile/info' className='hover:border-b-4 hover:text-blue-600 cursor-pointer'>Thông Tin</a>
                                </div>
                                <div className='m-2'>
                                    <button className="text-blue-600 border-b-4">Lịch Sử Thuê</button>
                                </div>

                            </nav>
                            <table className="w-full text-sm text-left text-black">
                                <thead className="text-xs uppercase bg-orange-500">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">STT</th>
                                        <th scope="col" className="px-4 py-3">Địa Điểm</th>
                                        <th scope="col" className="px-4 py-3">Thời Gian</th>
                                        <th scope="col" className="px-4 py-3">Số Lượng</th>
                                        <th scope="col" className="px-4 py-3">Trạng Thái</th>
                                        <th scope="col" className="px-4 py-3">Ngày Đặt Xe</th>
                                        <th scope="col" className="px-4 py-3">Tổng Giá Thuê</th>
                                        <th scope="col" className="px-4 py-3">Thanh Toán</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        contract.map((e, i) => (
                                            <tr key={i} className="border-b dark:border-gray-700">
                                                <td className="px-4 py-3">{i + 1}</td>
                                                <td className="px-4 py-3">{e.pickup_address}</td>
                                                <td className="px-4 py-3">
                                                    {Format_DateTime(e.start_date)}
                                                    {Format_DateTime(e.end_date)}
                                                </td>
                                                <td className="px-4 py-3">{e.bikes.length}</td>
                                                <td className="px-4 py-3">{TextColor(e.status)}</td>
                                                <td className="px-4 py-3">{Format_DateTime(e.createdAt)}</td>
                                                <td className="px-4 py-3">{Format_Currency(e.total_price)}</td>
                                                {
                                                    e.payment ? <td className="px-4 py-3 text-green-500">Đã Thanh Toán</td> : <td className="px-4 py-3">Chưa Thanh Toán</td>
                                                }

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}