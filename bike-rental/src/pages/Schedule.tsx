// import React from 'react'

import { useEffect, useState } from "react"
import { axiosClient } from "../apis/axiosClient"
import BranchData from "./Branch"

type UserData = {
    pickup_id: string, // save _id of branch
    pickup_address: string,
    return_address: string,
    start_date: string,
    end_date: string,
}

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

    // const Navigate = useNavigate();

    // const handleClick = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     console.log('1221');

    //     Navigate('/reservation/bike');
    // }

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
                                    onChange={e => updateFields({ start_date: e.target.value })}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Ngày trả xe</span>
                                <input
                                    value={end_date}
                                    type="date"
                                    name="end_date"
                                    id="end_date"
                                    required
                                    onChange={e => updateFields({ end_date: e.target.value })}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Điểm nhận xe</span>
                                <select
                                    defaultValue={pickup_address ? pickup_address : 'default'}
                                    name="pickup_address"
                                    id="pickup_address"
                                    required
                                    onChange={e => updateFields({
                                        pickup_address: e.target.value,
                                        pickup_id: e.target.selectedOptions[0].getAttribute('data-id')!
                                    })}
                                >
                                    <option value="default" disabled>-- Chọn điểm nhận xe --</option>
                                    {
                                        branches.map((branch, index) => (
                                            <option key={index} data-id={branch._id} value={branch.address}>{branch.address}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Điểm trả xe</span>
                                <select
                                    defaultValue={return_address ? return_address : 'default'}
                                    name="return_address" id="return_address"
                                    required
                                    onChange={e => updateFields({ return_address: e.target.value })}
                                >
                                    <option value="default" disabled>-- Chọn điểm nhận xe --</option>
                                    {
                                        branches.map((branch, index) => (
                                            <option key={index} value={branch.address}>{branch.address}</option>
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
