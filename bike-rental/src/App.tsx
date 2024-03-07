import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
// import { Header } from './components/Header';
// import { Footer } from './components/Footer';

import { Admin } from './pages/DashBoard';
import { Motorcycle } from './pages/Motorcycle';
// import { Schedule } from './pages/Schedule';
import { Info } from './pages/Info';
import { Confirm } from './pages/Confirm';
import { RentBikeForm } from './pages/RentBikeForm';
import { Location } from './pages/Location';
import { Location_Form_Create } from './pages/Location_Form_Create';
import { Bike_Form_Create } from './pages/Bike_Form_Create';
import { Test } from './pages/Test';

// import '../public/style.css'
import './registerStyle.css'
import './dashboard.css'
import { ListBike } from './pages/ListBike';


export const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/reservation' element={<RentBikeForm />} />
          <Route path='/reservation/bike' element={<Motorcycle />} />
          <Route path='/reservation/info' element={<Info />} />
          <Route path='/reservation/confirm' element={<Confirm />} />
          <Route path='/test' element={<Test />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<Admin />} />
          <Route path='location' element={<Location />} />
          <Route path='location/:location_id/bike' element={<ListBike />} />
          <Route path='location/:location_id/bike/add' element={<Bike_Form_Create />} />
          <Route path='location/add' element={<Location_Form_Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
