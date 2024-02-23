import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Admin } from './pages/Admin';
import { Motorcycle } from './pages/Reservation';
import { Schedule } from './pages/Schedule';
import { Info } from './pages/Info';
import { Confirm } from './pages/Confirm';
// import '../public/style.css'
import './registerStyle.css'
import './dashboard.css'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/reservation' element={<Schedule />} />
          <Route path='/reservation/bike' element={<Motorcycle />} />
          <Route path='/reservation/info' element={<Info />} />
          <Route path='/reservation/confirm' element={<Confirm />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
