import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";


function App() {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Pizza/:id' element={<Pizza />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
