import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useEffect, useContext } from "react";
import { PizzaContext } from "../contexts/pizzas-content";

const Home = () => {
  const urlApi = "http://localhost:5000/api/pizzas";
  const { menuPizzas, setMenuPizzas } = useContext(PizzaContext);

  const getPizzas = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return setMenuPizzas(data);
  };

  useEffect(() => {
    getPizzas(urlApi);
  }, []);

  return (
    <>
      <Header />
      <div className='d-flex flex-wrap justify-content-around p-1 home-background'>
        {menuPizzas.map((pizza) => (
          <CardPizza
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            desc={pizza.desc}
            url={pizza.img}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
