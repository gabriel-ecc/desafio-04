import { createContext, useState } from "react";

export const PizzaContext = createContext();
const PizzaProvider = ({ children }) => {
  const [menuPizzas, setMenuPizzas] = useState([]);
  const [tokenLogin, setTokenLogin] = useState(false);
  const [carroCompras, setCarroCompras] = useState([]);
  return (
    <PizzaContext.Provider
      value={{
        menuPizzas,
        setMenuPizzas,
        tokenLogin,
        setTokenLogin,
        carroCompras,
        setCarroCompras,
      }}>
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
