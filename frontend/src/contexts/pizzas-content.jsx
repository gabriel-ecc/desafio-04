import { createContext, useState } from "react";

export const PizzaContext = createContext();
const PizzaProvider = ({ children }) => {
  const [menuPizzas, setMenuPizzas] = useState([]);
  return (
    <PizzaContext.Provider value={{ menuPizzas, setMenuPizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
