import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { clientApi } from '../apis/clientApi';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

type BikeData = {
    _id: string,
    brand: string,
    model: string,
    year: string,
    color: string,
    license_plate?: string,
    status?: string,
    type: string,
    QR_code: string,
    location_id: string,
}

// type LocationFormProps = LocationData & {
//     updateFields: (fields: Partial<LocationData>) => void
// }

const INITIAL_DATA: BikeData = {
    _id: '',
    brand: '',
    model: '',
    year: '',
    color: '',
    // license_plate: '',
    status: 'AVAILABLE',
    type: '',
    QR_code: '',
    location_id: '',
}

export const Bike_Form_Create = () => {

    const [data, setData] = useState(INITIAL_DATA)
    const Navigate = useNavigate();
    const params = useParams();

    const updateFields = (newFields: Partial<BikeData>) => { 
        setData(prev => ({ ...prev, ...newFields }))
    }

    const handle = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log(data);
            
            // const res = await axios.post(`http://localhost:3000/location/${params.location_id}/bike/add`, data);
            // console.log(res);
            // Navigate(`/admin/location/${params.location_id}/bike`);
            
            
        } catch (error) {
            alert('Error');
        }
    }

    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <i className=''></i>
                    <span className='logo_name1'>Bike</span><span className="logo_name">Book</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink className="dashlinks" to="/dashboard">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="allLinks_name">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dashlinks" to="/addbikes">
                            <i className="fa-sharp fa-solid fa-square-plus"></i>
                            <span className="allLinks_name">Add Bikes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dashlinks" to="/getrentbikesforadmin">
                            <i className="fa-sharp fa-solid fa-motorcycle"></i>
                            <span className="allLinks_name">Available Rent Bikes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dashlinks" to="/rentbikesreports">
                            <i className="fa-solid fa-sack-dollar"></i>
                            <span className="allLinks_name">Rent Bikes Income</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dashlinks" to="/availableusers">
                            <i className="fa-solid fa-users"></i>
                            <span className="allLinks_name">Available Users</span>
                        </NavLink>
                    </li>
                </ul>

                <div className="logoutbtnDashDiv">
                    {/* <Loginbutton/> */}
                </div>
            </div>



            <section className="home-section">

                <div className="home-content">
                    <div className="sales-boxes">
                        <div className="recent-sales box">
                            <h1 className="heading"><span>Thêm Xe</span></h1>
                            <form onSubmit={handle} method="POST" className="addbikeform" name="rentform" id="myrentform">
                                <label htmlFor="brand">Hãng xe: </label>
                                <input
                                    onChange={(e) => { updateFields({brand: e.target.value}) }}
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    placeholder="Hãng xe"
                                />
                                <br />
                                <label htmlFor="model">Mẫu xe: </label>
                                <input
                                    onChange={(e) => { updateFields({model: e.target.value}) }}
                                    type="text"
                                    name="model"
                                    id="model"
                                    placeholder="Mẫu xe"
                                />
                                <br />
                                <label htmlFor="year">Năm Sản Xuất: </label>
                                <input
                                    onChange={(e) => { updateFields({year: e.target.value}) }}
                                    type="text"
                                    name="year"
                                    id="year"
                                    placeholder="Năm Sản Xuất"
                                />
                                <br />
                                <label htmlFor="color">Màu Sắc: </label>
                                <select
                                    className='border'
                                    name="color"
                                    id="color"
                                    onChange={(e) => { updateFields({color: e.target.value}) }}
                                >
                                    <option value="red">Đỏ</option>
                                    <option value="white">Trắng</option>
                                    <option value="black">Đen</option>
                                </select>
                                <br />
                                <label htmlFor="type">Loại Xe: </label>
                                <select
                                    className='border'
                                    name="type"
                                    id="type"
                                    onChange={(e) => { updateFields({type: e.target.value}) }}
                                >
                                    <option value="motorcycle">Xe máy</option>
                                    <option value="bikecycle">Xe đạp</option>
                                </select>
                                <button className='btn block'>Xác Nhận</button>
                            </form>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
