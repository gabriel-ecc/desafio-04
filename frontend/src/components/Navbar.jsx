import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { PizzaContext } from "../contexts/pizzasContext";
import { UserContext } from "../contexts/userContext";


const Navbar = () => {
  const { tokenLogin } = useContext(UserContext);
  const { totalCarro } = useContext(PizzaContext);

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary rounded '>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Pizzería Mamma Mia!
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/Home' className='btn btn-info m-2'>
                🍕 Home
              </Link>
            </li>
            {tokenLogin ? botonesTrue() : botonesFalse()}
          </ul>
          <span className='nav-item'>
            <Link to='/Cart' className='btn btn-info m-2'>
              🛒 Total: ${totalCarro.toLocaleString("es-cl")}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

const botonesTrue = () => {
  const { LogOut } = useContext(UserContext);
  return (
    <>
      <li className='nav-item'>
        <Link to='/Profile' className='btn btn-info m-2'>
          🧰 Profile
        </Link>
      </li>
      <li className='nav-item'>
        <button
          type='button'
          className='btn btn-info m-2'
          onClick={LogOut}>
          🚪 Logout
        </button>
      </li>
    </>
  );
};

const botonesFalse = () => {
  return (
    <>
      <li className='nav-item'>
        <Link to='/Login' className='btn btn-info m-2'>
          🔐 Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/Register' className='btn btn-info m-2'>
          🔐 Register
        </Link>
      </li>
    </>
  );
};
