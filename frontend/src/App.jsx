import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";

function App() {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col'>
          <Navbar/>
          {/* <Home/> */}
          {/* <Register/> */}
          {/* <Login/> */}
          <Cart/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
