import { FunctionComponent } from 'react'
import { NavLink } from "react-router-dom";


export const Header: FunctionComponent = () => {

    const Loginbutton = () => {

        const count: boolean = false;

        if (!count) {
            return (
                <>
                    <button className='mr-4'>
                        <i className="fa-solid fa-bell text-xl text-white"></i>
                    </button>
                    <button type='button' id='filterDropdownButton' data-dropdown-toggle='filterDropdown' data-model-target='filterDropdown' >
                        <img className="w-8 h-8 rounded-full hover:opacity-80"
                            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                            alt="Rounded avatar">
                        </img>
                    </button>

                </>
            )
        }
        else {
            return <div>
                <button ><NavLink className="bg-gray-500 p-2 rounded hover:bg-orange-500" to="/signin">Đăng nhập</NavLink></button>

            </div>
        }

    }

    return (
        <>
            <header className="header">

                <div id="menu-btn" className="fas fa-bars"></div>

                <NavLink className="logo" to="/"> Bike<span>Book</span></NavLink>



                <nav className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/rentbike">Rent Bikes</NavLink>
                    <a href="#services">Testimonial</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div id="login-btn">
                    <Loginbutton />

                </div>

                <div id="filterDropdown" className="z-10 hidden w-48 rounded bg-white border-2">
                    <ul className="m-2">
                        <li className="hover:bg-gray-100 m-2 rounded">
                            <a href="profile">Thông Tin</a>
                        </li>
                        <li className="hover:bg-gray-100 m-2 rounded">
                            <a href="profile">Đăng Xuất</a>
                        </li>
                    </ul>
                </div>

            </header>
        </>
    )
}
