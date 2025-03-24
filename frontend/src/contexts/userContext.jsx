import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [tokenLogin, setTokenLogin] = useState(false);
  const [tokenJWT, setTokenJWT] = useState("");
  const [userMail, setUserMail] = useState("");

  const authentication = async (userMail, password) => {
    try {
      const url = "http://localhost:5000/api/auth/login";
      const payload = { email: userMail, password };
      const user = await axios.post(url, payload);
      console.log("user", user);
      localStorage.setItem("token", user.data.token);
      console.log("user", user.data);
      if (user.status === 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const LogOut = () => {
    setTokenLogin(false);
  };

  return (
    <UserContext.Provider
      value={{ tokenLogin, LogOut, setTokenLogin, authentication }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
