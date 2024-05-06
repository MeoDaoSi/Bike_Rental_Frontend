import { useContext } from 'react';
import AuthAdminContext from '../../utils/authAdminContext';

export const Header = () => {

    const { logout } = useContext(AuthAdminContext);

    const handleLogout = async () => {
        logout();
    }

    return (
        <>
            <nav>
                <button className='mr-4'>
                    <i className="fa-solid fa-bell text-xl text-white"></i>
                </button>
                <button type='button' id='filterDropdownButton1' data-dropdown-toggle='filterDropdown1' data-model-target='filterDropdown' >
                    <img className="w-8 h-8 rounded-full hover:opacity-80"
                        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                        alt="Rounded avatar">
                    </img>
                </button>
                <div id="filterDropdown1" className="z-10 hidden w-48 rounded bg-white border-2">
                    <ul className="m-2">
                        <li className="hover:bg-gray-100 m-2 rounded">
                            <a href="/profile/info">Thông Tin</a>
                        </li>
                        <li className="hover:bg-gray-100 m-2 rounded">
                            <button onClick={handleLogout}>Đăng Xuất</button>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}
