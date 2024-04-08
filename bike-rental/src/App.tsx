import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import { Admin } from './pages/DashBoard';
import { RentBikeForm } from './pages/RentBikeForm';
import { Profile } from './pages/Profile';
import { Branch } from './pages/Branch';
import { Branch_Detail } from './pages/Branch_Detail';
import { Bike_Detail } from './pages/Bike_Detail';
import { Test } from './pages/Test';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

// import '../public/style.css'
import './registerStyle.css'
import './dashboard.css'
import { ListBike } from './pages/ListBike';

import { AuthProvider } from './utils/authContext';


export const App = () => {
    return (
        <BrowserRouter>

            {/* <Routes>

            </Routes> */}

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

            {/* <Routes>
                <Route path='/admin'>
                    <Route index element={<Admin />} />
                    <Route path='branch' element={<Branch />} />
                    <Route path='branch/:branch_id' element={<Branch_Detail />} />
                    <Route path='branch/:branch_id/bike' element={<ListBike />} />
                    <Route path='branch/:branch_id/bike/:bike_id' element={<Bike_Detail />} />
                </Route>
            </Routes> */}
        </BrowserRouter>
    )
}
