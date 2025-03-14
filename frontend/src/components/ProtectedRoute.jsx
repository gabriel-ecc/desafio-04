import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

export const ProtectedProfileRoute = ({ children }) => {
  const { tokenLogin } = useContext(UserContext);
  return tokenLogin ? children : <Navigate to='/Login' />;
};

export const ProtectedLoginRoute = ({ children }) => {
  const { tokenLogin } = useContext(UserContext);
  return tokenLogin ? <Navigate to='/Home' /> : children;
};
