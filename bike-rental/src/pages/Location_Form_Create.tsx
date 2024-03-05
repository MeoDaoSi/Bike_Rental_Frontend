import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { clientApi } from '../apis/clientApi';
import { useNavigate } from 'react-router-dom';

type LocationData = {
    address: string,
}

// type LocationFormProps = LocationData & {
//     updateFields: (fields: Partial<LocationData>) => void
// }

const INITIAL_DATA: LocationData = {
    address: '',
}

export const Location_Form_Create = () => {

    const [data, setData] = useState(INITIAL_DATA)
    const Navigate = useNavigate();

    const updateFields = (newFields: Partial<LocationData>) => { 
        setData(prev => ({ ...prev, ...newFields }))
    }

    const handle = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await clientApi.post(data, '/location');
            console.log(res);
            Navigate('/admin/location');
            
            
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
                <nav>
                    <div className="sidebar-button">
                        <span className="dashboard">Dashboard</span>
                    </div>
                
                    <div className="profile-details">
                        <span className="admin_name">Admin</span>
                    </div>
                </nav>

                <div className="home-content">
                    <div className="sales-boxes">
                        <div className="recent-sales box">
                            <h1 className="heading"><span>Add</span></h1>
                            <form onSubmit={handle} method="POST" className="addbikeform" name="rentform" id="myrentform">
                                <label htmlFor="fname">Nhap dia chi: </label>
                                <input
                                    onChange={(e) => { updateFields({address: e.target.value}) }}
                                    type="text"
                                    name="location"
                                    id="location"
                                    placeholder="Nhap dia chi"
                                />
                                <br />
                                <button className='btn block'>Them</button>
                            </form>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
