import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState(false);
  const { setTokenLogin } = useContext(UserContext);

  const validarDatos = (e) => {
    e.preventDefault();

    if (email === "desafio@desafio" && password === "desafio") {
      setError(false);
      setEmail("");
      setPassWord("");
      setTokenLogin(true);
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
          <label className='form-label text-light'>
            Email (test: desafio@desafio)
          </label>
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
          <label className='form-label text-light'>
            Contraseña (test: desafio)
          </label>
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
