const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary rounded '>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Pizzería Mamma Mia!
        </a>
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
              <a className='nav-link' aria-current='page' href='#'>
                🍕 Home
              </a>
            </li>
            {token?botonesTrue():botonesFalse()}
          </ul>
          <span className='nav-item'>
          <a className='nav-link' aria-current='page' href='#'>
                🛒 Total: ${total.toLocaleString('es-cl')}
              </a>
            
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
        <a className='nav-link' href='#'>
          🧰 Profile
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'> 
          🚪 Logout
        </a>
      </li>
    </>
  );
};

const botonesFalse = () => {
  return (
    <>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          🔐 Login
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          🔐 Register
        </a>
      </li>
    </>
  );
};
