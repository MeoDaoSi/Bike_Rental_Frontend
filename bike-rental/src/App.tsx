import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
// import { Footer } from './components/Footer';

import { Admin } from './pages/DashBoard';
import { RentBikeForm } from './pages/RentBikeForm';
import { Profile } from './pages/Profile';
import { Branch } from './pages/Branch';
import { Branch_Detail } from './pages/Branch_Detail';
import { Bike_Detail } from './pages/Bike_Detail';
import { Test } from './pages/Test';

// import '../public/style.css'
import './registerStyle.css'
import './dashboard.css'
import { ListBike } from './pages/ListBike';


export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='/reservation' element={<RentBikeForm />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/test' element={<Test />} />
                </Route>
                <Route path='/admin'>
                    <Route index element={<Admin />} />
                    <Route path='branch' element={<Branch />} />
                    <Route path='branch/:branch_id' element={<Branch_Detail />} />
                    <Route path='branch/:branch_id/bike' element={<ListBike />} />
                    <Route path='branch/:branch_id/bike/:bike_id' element={<Bike_Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
