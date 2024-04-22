import React, { useContext, useState } from 'react'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'
import { Schedule } from './Schedule'
import { Motorcycle } from './Motorcycle'
import { Info } from './Info'
import BikeData from '../Admin/Bike/ListBike'
import UserData from '../Admin/User/User'
import { axiosClient } from '../../apis/axiosClient'
import { useNavigate } from 'react-router-dom'
import AuthContext from "../../utils/authContext";
import { toast } from 'react-toastify'

type FormData = UserData & {
    pickup_id: string, // save _id of branch
    pickup_address: string,
    return_address: string,
    start_date: string,
    end_date: string,
    cart: BikeData[],
    duration: number,
    total_price: number,
}

export const RentBikeForm = () => {

    const { user } = useContext(AuthContext);

    const INITIAL_DATA: FormData = {
        pickup_id: '',
        pickup_address: '',
        return_address: '',
        start_date: '',
        end_date: '',
        cart: [],
        duration: 0,
        total_price: 0,
        full_name: user?.full_name || '',
        email: user?.email || '',
        birth_date: user?.birth_date || '',
        phone_number: user?.phone_number || undefined,
        address: user?.address || '',
        role: 'USER'
    }

    const Navigate = useNavigate();
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(newFields: Partial<FormData>) {
        setData(prev => ({ ...prev, ...newFields }))
    }
    const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <Schedule {...data} updateFields={updateFields} />,
        <Motorcycle {...data} updateFields={updateFields} />,
        <Info {...data} updateFields={updateFields} />,
    ])

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!isLastStep) return next();
        if (data.cart.length === 0) return toast.error('Vui lòng chọn xe để đặt!');
        const contract = await axiosClient.post('/contract', data);
        console.log(contract.data);
        toast.success('Đặt xe thành công!', {
            onClose: () => {
                window.location.href = '/';
            }
        });
    }
    return (
        <>
            <div className="flex flex-col justify-center mt-28">
                <form onSubmit={submit}>
                    {step}

                    <div className='flex justify-center p-4'>
                        {!isFirstStep && <button className='p-2 rounded bg-gray-200 hover:bg-orange-500' onClick={back} type='button'>
                            <i className="fa-solid fa-arrow-left mr-2"></i>
                            Trở lại
                        </button>}
                        <button className='ml-6 p-2 rounded bg-gray-200 hover:bg-orange-500'>
                            {isLastStep ? 'Xác Nhận' : 'Tiếp Theo'}
                            {!isLastStep && <i className="fa-solid fa-arrow-right ml-2"></i>}
                            {isLastStep && <i className="fa-solid fa-check ml-2"></i>}
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}
