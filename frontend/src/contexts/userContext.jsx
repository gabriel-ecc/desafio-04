import { createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [tokenLogin, setTokenLogin] = useState(true);

  const LogOut = () => {
    setTokenLogin(false);
  };

  return (
    <UserContext.Provider value={{ tokenLogin, LogOut, setTokenLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
