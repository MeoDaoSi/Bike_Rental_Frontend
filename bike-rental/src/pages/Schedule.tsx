// import React from 'react'

import { useEffect, useState } from "react"
import { axiosClient } from "../apis/axiosClient"
import BranchData from "./Branch"

type UserData = {
    pickup_location: string,
    return_location: string,
    pickup_time: string,
    return_time: string,
}

type UserFormProps = UserData & {

    updateFields: (fields: Partial<UserData>) => void
}

const INITIAL_DATA: BranchData[] = [{
    _id: '',
    address: ''
}];

export const Schedule = ({ pickup_location, return_location, pickup_time, return_time, updateFields }: UserFormProps) => {

    // const Navigate = useNavigate();

    // const handleClick = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     console.log('1221');

    //     Navigate('/reservation/bike');
    // }

    const [branches, setBranches] = useState(INITIAL_DATA)

    useEffect(() => {
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
            <div className="maincontainer" >
                <div className="firstcontainer" >
                    <div className="titled" >Chọn thời gian và địa điểm</div>
                    <div className="content" >
                        {/* <form> */}
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Ngày nhận xe</span>
                                <input
                                    value={pickup_time}
                                    type="date"
                                    name="pickup_time"
                                    id="pickup_time"
                                    required
                                    onChange={e => updateFields({ pickup_time: e.target.value })}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Ngày trả xe</span>
                                <input value={return_time} type="date" name="return_time" id="return_time" required onChange={e => updateFields({ return_time: e.target.value })} />
                            </div>
                            <div className="input-box">
                                <span className="details">Điểm nhận xe</span>
                                <select
                                    defaultValue={pickup_location ? pickup_location : 'default'}
                                    name="pickup_location"
                                    id="pickup_location"
                                    required
                                    onChange={e => updateFields({ pickup_location: e.target.value })}
                                >
                                    <option value="default" disabled>-- Chọn điểm nhận xe --</option>
                                    {
                                        branches.map((branch, index) => (
                                            <option key={index} value={branch._id}>{branch.address}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Điểm trả xe</span>
                                <select
                                    defaultValue={return_location ? return_location : 'default'}
                                    name="return" id="return"
                                    required
                                    onChange={e => updateFields({ return_location: e.target.value })}
                                >
                                    <option value="default" disabled>-- Chọn điểm nhận xe --</option>
                                    {
                                        branches.map((branch, index) => (
                                            <option key={index} value={branch._id}>{branch.address}</option>
                                        ))
                                    }
                                </select>
                            </div>


                        </div>
                        {/* </form> */}
                    </div>

                </div>


            </div>

        </>
    )
}
