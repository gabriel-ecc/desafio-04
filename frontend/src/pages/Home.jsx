import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useEffect, useContext } from "react";
import { PizzaContext } from "../contexts/pizzas-content";

const Home = () => {
  
  const { menuPizzas, setMenuPizzas } = useContext(PizzaContext);
  

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
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
