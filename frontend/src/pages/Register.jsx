import { useState } from "react";
import "../App.css";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [datosFormulario, setDatosFomulario] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState(false);
  const { registrarUsuario } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatosFomulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const validarDatos = async (e) => {
    e.preventDefault();
    const { email, password, password2 } = datosFormulario;

    if (email === "" || password === "" || password2 === "") {
      setError("Todos los datos son necesarios");
      return;
    }
    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }
    const success = await registrarUsuario(email, password);
    success ? navigate("/") : setError("falla en el registro");
  };

  return (
    <>
      <form className='formulario p-2' onSubmit={validarDatos}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className='mb-3'>
          <label className='form-label text-light'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='name@example.com'
            className='form-control'
            onChange={handleChange}
            value={datosFormulario.email}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label text-light'>Contraseña</label>
          <input
            type='password'
            name='password'
            className='form-control'
            minLength='6'
            onChange={handleChange}
            value={datosFormulario.password}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label text-light'>Confirmar Contraseña</label>
          <input
            type='password'
            name='password2'
            className='form-control'
            minLength='6'
            onChange={handleChange}
            value={datosFormulario.password2}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Enviar
        </button>
      </form>
    </>
  );
};
export default Register;
