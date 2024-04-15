export const SideBar = () => {
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
                        <a href="/admin" className="dashlinks">
                            <div>
                                <i className="fa-solid fa-table-columns text-white"></i>
                                <span className="allLinks_name">Dashboard</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/branch" className="dashlinks">
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
                                <span className="allLinks_name">Đặt Xe</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
