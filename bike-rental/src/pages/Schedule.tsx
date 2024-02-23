// import React from 'react'

import { useNavigate } from 'react-router-dom';

export const Schedule = () => {

    const Navigate = useNavigate();

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('1221');

        Navigate('/reservation/bike');
    }

    return (
        <>
            <div className="maincontainer" >
                <div className="firstcontainer" >
                    <div className="titled" >Chọn thời gian và địa điểm</div>
                    <div className="content" >
                        <form method='POST' onSubmit={handleClick}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Ngày nhận xe</span>
                                    <input type="date" name="pickup_time" id="pickup_time" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Ngày trả xe</span>
                                    <input type="date" name="return_time" id="return_time" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Điểm nhận xe</span>
                                    <select defaultValue="default" name="pickup" id="pickup" required>
                                        <option value="default" disabled hidden >Chọn địa điểm</option>
                                        <option value="volvo">Volvossssssssssssssssssssssss</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="input-box">
                                    <span className="details">Điểm trả xe</span>
                                    <select defaultValue="default" name="return" id="return" required>
                                        <option value="default" disabled hidden >Chọn địa điểm</option>
                                        <option value="volvo">Volvossssssssssssssssssssssss</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <button className='btn'>Thuê</button>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}
