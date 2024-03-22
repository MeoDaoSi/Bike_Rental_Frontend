import React, { useState } from 'react'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { Schedule } from './Schedule'
import { Motorcycle } from './Motorcycle'
import { Info } from './Info'
import BikeData from './ListBike'
import UserData from './User'
import { axiosClient } from '../apis/axiosClient'

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

const INITIAL_DATA: FormData = {
    pickup_id: '',
    pickup_address: '',
    return_address: '',
    start_date: '',
    end_date: '',
    cart: [],
    duration: 0,
    total_price: 0,
    full_name: '',
    email: '',
    password: '',
    birth_date: '',
    phone_number: 0,
    address: ''
}

export const RentBikeForm = () => {
    const [data, setData] = useState(INITIAL_DATA);

    console.log(data);

    // const createContract = async () => {
    //     try {
    //         const res = await axiosClient.post('/contracts', data);
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    function updateFields(newFields: Partial<FormData>) {
        setData(prev => ({ ...prev, ...newFields }))
    }
    const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <Schedule {...data} updateFields={updateFields} />,
        <Motorcycle {...data} updateFields={updateFields} />,
        <Info {...data} updateFields={updateFields} />,
    ])

    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!isLastStep) return next();
        console.log('form submitted', data);
    }
    return (
        <>
            <div className="flex flex-col justify-center mt-32">
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
