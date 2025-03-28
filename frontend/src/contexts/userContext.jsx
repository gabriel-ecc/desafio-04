import { createContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [tokenJWT, setTokenJWT] = useState(localStorage.getItem('token'));
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

  const LogOut = () => {
    setUserMail("");
    setTokenJWT("");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{ tokenJWT, LogOut, userMail, authentication }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
