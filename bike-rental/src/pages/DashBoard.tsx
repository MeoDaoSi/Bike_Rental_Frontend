import React from 'react'
import { NavLink } from 'react-router-dom'

export const Admin = () => {
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
                            <i className="fa-solid fa-table-columns"></i>
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
                        <NavLink className="dashlinks" to="/admin/location">
                            <i className="fa-solid fa-store"></i>
                            <span className="allLinks_name">Cửa Hàng</span>
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
                    {/* <Loginbutton /> */}
                </div>
            </div>



            <section className="mt-28 home-section">

                <div className="home-content" style={{ textAlign: "center" }}>
                    <h1>WELCOME TO DASHBOARD</h1><br />
                    <h3>Go To Add Bikes Tab In Side Menu To Add Bikes In Database</h3><br />
                    <h3>Go To Rent Bikes Tab In Side Menu To Generate Income Reports of Rented Bikes In Database</h3><br />
                    <h3>Go To Available Users Tab In Side Menu To See All Available Users Regestered In Database</h3><br />
                </div>

            </section>
        </>
    )
}
