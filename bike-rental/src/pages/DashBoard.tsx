import React from 'react'
// import { NavLink } from 'react-router-dom'

export const Admin = () => {
    return (
        <>
            <div className="sidebar">
                <a href="/admin">
                    <div className="logo-details border-b">
                        <i className=''></i>
                        <span className='logo_name1'>Bike</span><span className="logo_name">Book</span>
                    </div>
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="/dashboard" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-table-columns text-white"></i>
                            <span className="allLinks_name">Dashboard</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/location" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-store text-white"></i>
                                <span className="allLinks_name">Chi Nhánh</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/user" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-users text-white"></i>
                                <span className="allLinks_name">Người Dùng</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/contract" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-file-contract text-white"></i>
                                <span className="allLinks_name">Hợp Đồng</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            


            <section className="home-section">
                <nav>
                    <button className='mr-4'>
                        <i className="fa-solid fa-bell text-xl text-white"></i>
                    </button>
                    <button>
                        <img className="w-10 h-10 rounded-full"
                            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                            alt="Rounded avatar">
                        </img>
                    </button>
                    
                </nav>
                

                <div className="home-content mt-24" style={{ textAlign: "center" }}>
                    <h1>WELCOME TO DASHBOARD</h1><br />
                    <h3>Go To Add Bikes Tab In Side Menu To Add Bikes In Database</h3><br />
                    <h3>Go To Rent Bikes Tab In Side Menu To Generate Income Reports of Rented Bikes In Database</h3><br />
                    <h3>Go To Available Users Tab In Side Menu To See All Available Users Regestered In Database</h3><br />
                </div>

            </section>
        </>
    )
}
