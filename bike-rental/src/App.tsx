import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import { Button } from './components/Button';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
