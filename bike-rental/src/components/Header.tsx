import { FunctionComponent, useContext } from 'react'
// import authUtils from '../utils/authUtils';
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/authContext';

export const Header: FunctionComponent = () => {

    const { isLoggedIn, logout } = useContext(AuthContext);

    console.log(isLoggedIn);

    const handleLogout = async () => {
        logout();
    }


    return (
        <>
            <header className="header">

                <div id="menu-btn" className="fas fa-bars"></div>

                <a className="logo" href="/"> Bike<span>Book</span></a>



                <nav className="navbar">
                    <a href="/">Trang Chủ</a>
                    <a href="/rentbike">Dịch Vụ</a>
                    <a href="/rentbike">Bảng Giá</a>
                    <a href="/rentbike">Liên Hệ</a>
                    <a className='relative' href="/map">
                        <i className="fa-solid fa-location-dot mr-1"></i>
                        Map
                        <div className="absolute hover:text-orange-500 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-red-500 -top-2 -end-6 dark:border-gray-900">New</div>
                    </a>
                </nav>

                <div id="login-btn">
                    {
                        isLoggedIn ?
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
                                            <a href="/profile/info">Thông Tin</a>
                                        </li>
                                        <li className="hover:bg-gray-100 m-2 rounded">
                                            <button onClick={handleLogout}>Đăng Xuất</button>
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
