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

// import '../public/style.css'
import './registerStyle.css'
import './dashboard.css'


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
        </Route>
        <Route path='/admin'>
          <Route index element={<Admin />} />
          <Route path='location' element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
