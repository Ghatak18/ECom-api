import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';

const Routers = () => {
  return (
    <Routes>
      
        <Route path="/" element={<App/>}></Route>
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  );
};

export default Routers;
