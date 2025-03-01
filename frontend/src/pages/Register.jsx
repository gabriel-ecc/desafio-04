import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [password2, setPassWord2] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || password2 === "") {
      setError("Todos los datos son necesarios");
      return;
    }
    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }
    alert("Cuenta Creada con Éxito");
    setError(false);
    setEmail("");
    setPassWord("");
    setPassWord2("");
  };

  return (
    <>
      <form className='formulario p-2' onSubmit={validarDatos}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className='mb-3'>
          <label className='form-label text-light'>Email</label>
          <input
            type='email'
            name='mail'
            placeholder='name@example.com'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label text-light'>Contraseña</label>
          <input
            type='password'
            name='pass'
            className='form-control'
            minLength='6'
            onChange={(e) => setPassWord(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label text-light'>Confirmar Contraseña</label>
          <input
            type='password'
            name='pass2'
            className='form-control'
            minLength='6'
            onChange={(e) => setPassWord2(e.target.value)}
            value={password2}
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
