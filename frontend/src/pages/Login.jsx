import { useState } from "react";
import "../App.css";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [datosFormulario, setDatosFomulario] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const { authentication } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatosFomulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const validarDatos = async (e) => {
    e.preventDefault();
    const { email, password } = datosFormulario;
    const success = await authentication(email, password);

    if (success) {
      setError(false);
      navigate("/"); // Navigate to the home page after successful login
    } else {
      setError("Datos no son validos");
    }
  };

  return (
    <>
      <form className="formulario p-2" onSubmit={validarDatos}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="mb-3">
          <label className="form-label text-light">Email</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="form-control"
            onChange={handleChange}
            value={datosFormulario.email}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={datosFormulario.password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          🔓 LogIn
        </button>
      </form>
    </>
  );
};
export default Login;
