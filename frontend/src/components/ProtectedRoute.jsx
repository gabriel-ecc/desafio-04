import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

export const ProtectedProfileRoute = ({ children }) => {
  const { tokenJWT } = useContext(UserContext);
  return tokenJWT ? children : <Navigate to='/Login' />;
};

export const ProtectedLoginRoute = ({ children }) => {
  const { tokenJWT } = useContext(UserContext);
  return tokenJWT ? <Navigate to='/Home' /> : children;
};
