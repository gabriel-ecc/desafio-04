import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../contexts/pizzas-content";

const Profile = () => {
  const { tokenLogin, setTokenLogin } = useContext(PizzaContext);
  const cerrarSesion = () => {
    console.log('Cerrando sesión...');
    setTokenLogin(false);
  };

  return (
    <div class='card text-center d-inline-flex m-2'>
      <div class='card-header'>
        <ul class='nav nav-tabs card-header-tabs'>
          <li class='nav-item'>
            <a class='nav-link active' aria-current='true' href='#'>
              Mi perfil
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Mis pedidos
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Editar mis datos
            </a>
          </li>
        </ul>
      </div>
      <div class='card-body'>
        <h5 class='card-title'>Mis datos</h5>
        <p class='card-text'>Correo: desafio@desafio.cl</p>
        <Link
          to='/Home'
          className='btn btn-primary'
          onClick={() => cerrarSesion()}>
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
};

export default Profile;
