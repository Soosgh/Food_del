import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx';
import Home from './Pages/Home/Home.jsx';  // Correct import with 'default'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;