import Header from "./Header";
import CardPizza from "./CardPizza";
import { useEffect, useState } from "react";

const Home = () => {
  const urlApi = "http://localhost:5000/api/pizzas";
  const [listaPizzas, setListaPizzas] = useState([]);

  const getPizzas = async (url) => {
    console.log('hola')
    const res = await fetch(url);
    const data = await res.json();
    return setListaPizzas(data);
  };

  useEffect(() => {
    getPizzas(urlApi);
  }, []);

  return (
    <>
      <Header />
      <div className='d-flex flex-wrap justify-content-around p-1 home-background'>
        {listaPizzas.map((pizza) => (
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
