import { createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [tokenLogin, setTokenLogin] = useState(true);

  const LogOut = () => {
    setTokenLogin(false);
  };

  const userStruct = {
    tokenLogin,
    LogOut,
  };

  return (
    <UserContext.Provider value={userStruct}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
