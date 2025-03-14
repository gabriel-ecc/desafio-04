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
import PizzaProvider from "./contexts/pizzasContext";
import {
  ProtectedProfileRoute,
  ProtectedLoginRoute,
} from "./components/ProtectedRoute";
import UserProvider from "./contexts/userContext";

function App() {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col'>
          <PizzaProvider>
            <UserProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route
                  path='/Register'
                  element={
                    <ProtectedLoginRoute>
                      <Register />
                    </ProtectedLoginRoute>
                  }
                />
                <Route
                  path='/Login'
                  element={
                    <ProtectedLoginRoute>
                      <Login />
                    </ProtectedLoginRoute>
                  }
                />
                <Route path='/Cart' element={<Cart />} />
                <Route
                  path='/Profile'
                  element={
                    <ProtectedProfileRoute>
                      <Profile />
                    </ProtectedProfileRoute>
                  }
                />
                <Route path='/Pizza/:id' element={<Pizza />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <Footer />
            </UserProvider>
          </PizzaProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
