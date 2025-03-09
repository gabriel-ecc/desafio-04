import { createContext, useState, useMemo, useEffect } from "react";
import { pizzaCart } from "../assets/js/pizzas";

export const PizzaContext = createContext();
const PizzaProvider = ({ children }) => {
  const [menuPizzas, setMenuPizzas] = useState([]);
  const [tokenLogin, setTokenLogin] = useState(false);
  const [carroCompras, setCarroCompras] = useState(pizzaCart);
  const [totalCarro, setTotalCarro] = useState(() => {
    let monto = 0;
    for (const pizza of carroCompras) {
      monto += pizza.count * pizza.price;
    }
    return monto;
  });

  return (
    <PizzaContext.Provider
      value={{
        menuPizzas,
        setMenuPizzas,
        tokenLogin,
        setTokenLogin,
        carroCompras,
        setCarroCompras,
        totalCarro,
        setTotalCarro,
      }}>
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
