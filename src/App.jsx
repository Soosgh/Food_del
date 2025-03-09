import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx';
import Home from './Pages/Home/Home.jsx';  // Correct import with 'default'
import Footer from './Component/Footer/Footer.jsx';
import LoginPopup from './Component/LoginPopup/LoginPopup.jsx';




const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (

    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>

      </div>
      <Footer />
    </>

  );
};

export default App;