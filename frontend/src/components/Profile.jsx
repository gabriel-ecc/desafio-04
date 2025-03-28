import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Profile = () => {
  const { LogOut, userMail, tokenJWT } = useContext(UserContext);

  return (
    <>
      {tokenJWT ? (
        <div className='card text-center d-inline-flex m-2'>
          <div className='card-header'>
            <ul className='nav nav-tabs card-header-tabs'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='true' href='#'>
                  Mi perfil
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Mis pedidos
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Editar mis datos
                </a>
              </li>
            </ul>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Mis datos</h5>
            <p className='card-text'>Correo: {userMail}</p>
            <Link to='/Home' className='btn btn-primary' onClick={LogOut}>
              Cerrar Sesión
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Profile;
