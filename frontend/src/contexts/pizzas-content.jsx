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

  const urlApi = "http://localhost:5000/api/pizzas";

  const getPizzas = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return setMenuPizzas(data);
  };

  useEffect(() => {
    getPizzas(urlApi);
  }, []);

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
