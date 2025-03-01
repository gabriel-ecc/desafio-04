import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (email === "desafio@desafio" && password === "desafio") {
      alert("LogIn Éxito");
      setError(false);
      setEmail("");
      setPassWord("");
    } else {
      setError("Datos no son validos");
      return;
    }
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
            onChange={(e) => setPassWord(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          🔓 LogIn
        </button>
      </form>
    </>
  );
};
export default Login;
