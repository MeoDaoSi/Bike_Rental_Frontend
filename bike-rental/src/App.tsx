import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import { Admin } from './pages/Admin/DashBoard';
import { RentBikeForm } from './pages/Reservation/RentBikeForm';
import { Profile } from './pages/Profile';
import { Branch } from './pages/Admin/Branch/Branch';
import { Branch_Detail } from './pages/Admin/Branch/Detail/Branch_Detail';
import { Bike_Detail } from './pages/Admin/Bike/Detail/Bike_Detail';
import { Test } from './pages/Test';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Map } from './pages/Map';
import { Contract } from './pages/Contract';
import { Contract_Detail } from './pages/Contract/Detail/Contract_Detail';
import { Login } from './pages/Admin/Login';
// import { AuthAdmin } from './middlewares/AuthAdmin';

// import '../public/style.css'
import './registerStyle.css'
import './dashboard.css'
import { ListBike } from './pages/Admin/Bike/ListBike';

import { AuthProvider } from './utils/authContext';
import { AuthAdminProvider } from './utils/authAdminContext';


export const App = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/map' element={<Map />} />
            </Routes>

            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/reservation' element={<RentBikeForm />} />
                    <Route path='/test' element={<Test />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </AuthProvider>

            <AuthAdminProvider>
                <Routes>
                    <Route path='/admin/login' element={<Login />} />
                    <Route path='/admin'>
                        <Route index element={<Admin />} />
                        <Route path='branch' element={<Branch />} />
                        <Route path='branch/:branch_id' element={<Branch_Detail />} />
                        <Route path='branch/:branch_id/bike' element={<ListBike />} />
                        <Route path='branch/:branch_id/bike/:bike_id' element={<Bike_Detail />} />
                        <Route path='contract' element={<Contract />} />
                        <Route path='contract/:contract_id' element={<Contract_Detail />} />
                    </Route>
                </Routes>
            </AuthAdminProvider>

        </BrowserRouter>
    )
}
