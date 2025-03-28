import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [tokenJWT, setTokenJWT] = useState(localStorage.getItem("token"));
  const [userMail, setUserMail] = useState(null);

  const authentication = async (userMail, password) => {
    try {
      const url = "http://localhost:5000/api/auth/login";
      const payload = { email: userMail, password };
      const user = await axios.post(url, payload);
      console.log("user", user);
      console.log("user", user.data);
      if (user.status === 200) {
        setUserMail(user.data.email);
        setTokenJWT(user.data.token);
        localStorage.setItem("token", user.data.token);
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const autorizacion = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const url = "http://localhost:5000/api/auth/me";
        const res = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.status === 200) {
          setUserMail(res.data.email);
          return true;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  };

  const registrarUsuario = async (userMail, password) => {
    try {
      const url = "http://localhost:5000/api/auth/register";
      const res = await axios.post(url, { email: userMail, password });
      if (res.status === 200) {
        setUserMail(res.data.email);
        setTokenJWT(res.data.token);
        localStorage.setItem("token", res.data.token);
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const LogOut = () => {
    setUserMail("");
    setTokenJWT("");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        tokenJWT,
        LogOut,
        userMail,
        authentication,
        autorizacion,
        registrarUsuario,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
