import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { tokenLogin } = useContext(UserContext);
  return tokenLogin ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
