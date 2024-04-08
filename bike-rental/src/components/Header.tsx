import { FunctionComponent, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import authUtils from '../utils/authUtils';
// import { useNavigate } from 'react-router-dom';

let bool = false

export const Header: FunctionComponent = () => {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // window.location.reload();
            const isAuth = await authUtils.isAuthenticated();
            if (isAuth) {
                setIsAuth(true);
            }
            console.log(isAuth);

        }
        checkAuth();
    }, [])

    console.log(isAuth);


    return (
        <>
            <header className="header">

                <div id="menu-btn" className="fas fa-bars"></div>

                <NavLink className="logo" to="/"> Bike<span>Book</span></NavLink>



                <nav className="navbar">
                    <NavLink to="/">Trang Chủ</NavLink>
                    <NavLink to="/rentbike">Dịch Vụ</NavLink>
                    <NavLink to="/rentbike">Bảng Giá</NavLink>
                    <NavLink to="/rentbike">Liên Hệ</NavLink>
                </nav>

                <div id="login-btn">
                    {
                        isAuth ?
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
                            </>
                            :
                            <div>
                                <button><a className="bg-gray-500 p-2 rounded hover:bg-orange-500 text-white" href="/signin">Đăng nhập</a></button>

                            </div>
                    }
                </div>

            </header>
        </>
    )
}
