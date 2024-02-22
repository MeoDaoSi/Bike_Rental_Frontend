import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
// import { Footer } from './components/Footer';
import { Admin } from './pages/Admin';
import { Motorcycle } from './pages/Reservation';
import { Schedule } from './pages/Schedule';
// import '../public/style.css'


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/reservation' element={<Schedule />} />
          <Route path='/reservation/bike' element={<Motorcycle />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}
