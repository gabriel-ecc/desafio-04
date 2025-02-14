import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/js/pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <div className='d-flex flex-wrap justify-content-around p-1 home-background'>
        {pizzas.map((pizza) => (
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
