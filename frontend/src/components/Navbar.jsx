import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = true;

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
              <Link to='/Home' className='nav-link'>
                🍕 Home
              </Link>
            </li>
            {token ? botonesTrue() : botonesFalse()}
          </ul>
          <span className='nav-item'>
            <Link to='/Cart' className='nav-link'>
              🛒 Total: ${total.toLocaleString("es-cl")}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

const botonesTrue = () => {
  return (
    <>
      <li className='nav-item'>
        <Link to='/Profile' className='nav-link'>
          🧰 Profile
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/Logout' className='nav-link'>
          🚪 Logout
        </Link>
      </li>
    </>
  );
};

const botonesFalse = () => {
  return (
    <>
      <li className='nav-item'>
        <Link to='/Login' className='nav-link'>
          🔐 Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/Register' className='nav-link'>
          🔐 Register
        </Link>
      </li>
    </>
  );
};
