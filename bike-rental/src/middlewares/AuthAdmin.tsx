import { useContext } from 'react'
import { AuthAdminContext } from '../utils/authAdminContext'
import { Navigate, Outlet } from 'react-router-dom';


export const AuthAdmin = () => {

    const { isLoggedIn, isAdmin } = useContext(AuthAdminContext);

    console.log('test');

    if (!isLoggedIn && !isAdmin) {
        return <Navigate to='/admin/login' replace />
    }
    return <Outlet />
}
