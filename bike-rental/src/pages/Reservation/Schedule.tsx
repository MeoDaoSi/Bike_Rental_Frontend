// import React from 'react'

import { useEffect, useState } from "react"
import { axiosClient } from "../../apis/axiosClient"
import BranchData from "../Admin/Branch/Branch"
import { Header } from "../../components/Header"

type UserData = {
    pickup_id: string, // save _id of branch
    pickup_address: string,
    return_address: string,
    start_date: string,
    end_date: string,
}

type Errors = Partial<Record<keyof UserData, string>>
type Touched = Partial<Record<keyof UserData, boolean>>

type UserFormProps = UserData & {

    updateFields: (fields: Partial<UserData>) => void
}

const INITIAL_DATA: BranchData[] = [{
    _id: '',
    address: ''
}];

export const Schedule = ({
    pickup_id,
    pickup_address,
    return_address,
    start_date,
    end_date,
    updateFields
}: UserFormProps) => {

    const validate = (newInputs: UserData): Errors => {
        const newErrors: Errors = {}

        if (new Date(newInputs.end_date) < new Date(newInputs.start_date)) {
            newErrors.end_date = "Ngày trả xe không hợp lệ!"
        }
        if (newInputs.pickup_address == '') {
            newErrors.pickup_address = "Vui lòng nhập trường này !"
        }
        if (newInputs.return_address == '') {
            newErrors.return_address = "Vui lòng nhập trường này !"
        }

        return newErrors
    }

    const [errors, setErrors] = useState<Errors>(validate({
        pickup_id,
        pickup_address,
        return_address,
        start_date,
        end_date,
    }))
    const [touched, setTouched] = useState<Touched>({})

    const [branches, setBranches] = useState(INITIAL_DATA)

    useEffect(() => {
        console.log(pickup_id);

        const getData = async () => {
            try {
                const data = await axiosClient.get('/branch');
                console.log(data.data);
                setBranches(data.data);

            } catch (error) {
                alert('error');
            }
        }
        getData();
    }, [])

    return (
        <>
            <Header />
            <div className="maincontainer" >
                <div className="firstcontainer" >
                    <div className="titled" >Chọn thời gian và địa điểm</div>
                    <div className="content" >
                        {/* <form> */}
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Ngày nhận xe</span>
                                <input
                                    value={start_date}
                                    type="date"
                                    name="start_date"
                                    id="start_date"
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    max={(new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                                    // set max date field to be around 30 days from the current date
                                    onChange={e => {
                                        updateFields({ start_date: e.target.value })
                                        setErrors(validate({
                                            pickup_id,
                                            pickup_address,
                                            return_address,
                                            end_date,
                                            start_date: e.target.value
                                        }))
                                    }}
                                    onBlur={() => setTouched({ ...touched, start_date: true })}
                                />
                                {errors.start_date && touched.start_date ? <small className="text-red-500">{errors.start_date}</small> : null}
                            </div>
                            <div className="input-box">
                                <span className="details">Ngày trả xe</span>
                                <input
                                    value={end_date}
                                    type="date"
                                    name="end_date"
                                    id="end_date"
                                    min={new Date().toISOString().split('T')[0]}
                                    max={(new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                                    // set max date field to be around 30 days from the current date
                                    required
                                    onChange={e => {
                                        updateFields({ end_date: e.target.value })
                                        setErrors(validate({
                                            pickup_id,
                                            pickup_address,
                                            return_address,
                                            start_date,
                                            end_date: e.target.value
                                        }))
                                    }}
                                    onBlur={() => setTouched({ ...touched, end_date: true })}
                                />
                                {errors.end_date && touched.end_date ? <small className="text-red-500">{errors.end_date}</small> : null}
                            </div>
                            <div className="input-box">
                                <span className="details">Điểm nhận xe</span>
                                <select
                                    defaultValue={pickup_address ? pickup_address : 'default'}
                                    name="pickup_address"
                                    id="pickup_address"
                                    required
                                    onChange={e => {
                                        updateFields({
                                            pickup_address: e.target.value,
                                            pickup_id: e.target.selectedOptions[0].getAttribute('data-id')!

                                        })
                                        setErrors(validate({
                                            pickup_id,
                                            pickup_address: e.target.value,
                                            return_address,
                                            start_date,
                                            end_date
                                        }))
                                    }}
                                    onBlur={() => setTouched({ ...touched, pickup_address: true })}
                                >
                                    <option value="default" disabled>-- Chọn điểm nhận xe --</option>
                                    {
                                        branches.map((branch, index) => (
                                            <option key={index} data-id={branch._id} value={branch.address}>{branch.address}</option>
                                        ))
                                    }
                                </select>
                                {errors.pickup_address && touched.pickup_address ? <small className="text-red-500">{errors.pickup_address}</small> : null}
                            </div>
                            <div className="input-box">
                                <span className="details">Điểm trả xe</span>
                                <select
                                    defaultValue={return_address ? return_address : 'default'}
                                    name="return_address" id="return_address"
                                    required
                                    onChange={e => {
                                        updateFields({ return_address: e.target.value })
                                        setErrors(validate({
                                            pickup_id,
                                            pickup_address,
                                            return_address: e.target.value,
                                            start_date,
                                            end_date
                                        }))
                                    }}
                                    onBlur={() => setTouched({ ...touched, return_address: true })}
                                >
                                    <option value="default" disabled>-- Chọn điểm nhận xe --</option>
                                    {
                                        branches.map((branch, index) => (
                                            <option key={index} value={branch.address}>{branch.address}</option>
                                        ))
                                    }
                                </select>
                                {errors.return_address && touched.return_address ? <small className="text-red-500">{errors.return_address}</small> : null}
                            </div>


                        </div>
                        {/* </form> */}
                    </div>

                </div>


            </div>

        </>
    )
}
