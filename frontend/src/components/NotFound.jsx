import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='card d-inline-flex m-2'>
      <h5 className='card-header'>Error</h5>
      <div className='card-body'>
        <h5 className='card-title'>La pagina que buscas no existe</h5>
        <p className='card-text'>Te guiamos al inicio.</p>
        <Link to='/Home' className='btn btn-primary'>
          🍕 Al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
