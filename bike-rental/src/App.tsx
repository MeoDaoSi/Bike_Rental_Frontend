import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import { Button } from './components/ui/Button';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
