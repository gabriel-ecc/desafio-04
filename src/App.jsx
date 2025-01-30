import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <div className='contenedor'>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
