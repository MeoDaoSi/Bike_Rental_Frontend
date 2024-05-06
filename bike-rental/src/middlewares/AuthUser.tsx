import { useContext } from 'react'
import AuthContext from '../utils/authContext'
import { Navigate, Outlet } from 'react-router-dom';


export const AuthUser = () => {

    const { isLoggedIn } = useContext(AuthContext);

    console.log('test');

    if (!isLoggedIn) {
        return <Navigate to='/signin' replace />
    }
    return <Outlet />
}
