import React, { useState } from 'react'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { Schedule } from './Schedule'
import { Motorcycle } from './Motorcycle'
import { Info } from './Info'
import { Confirm } from './Confirm'

type FormData = {
    pickup_location: string,
    return_location: string,
    pickup_time: string,
    return_time: string,
}

const INITIAL_DATA: FormData = {
    pickup_location: '',
    return_location: '',
    pickup_time: '',
    return_time: '',
}

export const RentBikeForm = () => {
    const [data, setData] = useState(INITIAL_DATA);
    
    function updateFields(newFields: Partial<FormData>) {
        setData(prev => ({ ...prev, ...newFields }))
    }
    const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <Schedule {...data} updateFields={updateFields} />,
        <Motorcycle />,
        <Info />,
        <Confirm />
    ])

    function submit(e: React.FormEvent) {
        e.preventDefault();
        next();
        // console.log('form submitted', data);
    }
    return (
        <>
            <div className="flex flex-col justify-center mt-32">
                <form onSubmit={submit}>
                    {step}
                
                    <div className='flex justify-center'>
                        {!isFirstStep && <button className='' onClick={back} type='button'>Back</button>}
                        <button className='ml-12 'type='submit'>{isLastStep ? 'finish' : 'Next'}</button>
                    </div>
                    
                </form>

            </div>
        </>
    )
}
