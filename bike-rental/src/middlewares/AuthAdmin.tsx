import { useContext } from 'react'
import AuthAdminContext from '../utils/authAdminContext'
import { Navigate, Outlet } from 'react-router-dom';


export const AuthAdmin = () => {

    const { isLoggedIn } = useContext(AuthAdminContext);

    if (!isLoggedIn) {
        return <Navigate to='/admin/login' replace />
    }
    return <Outlet />
}