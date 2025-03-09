import { Link } from "react-router-dom";
import { PizzaContext } from "../contexts/pizzas-content";
import { useContext } from "react";

const CardPizza = ({ id, name, price, ingredients, desc, img }) => {
  const { carroCompras, setCarroCompras, setTotalCarro } =
    useContext(PizzaContext);

  const agregarAlCarrito = () => {
    const pizzaToAdd = {
      id,
      name,
      price,
      ingredients,
      desc,
      img,
      count: 1, // Inicializamos el contador en 1
    };

    // Actualizamos el carro de compras de manera inmutable
    setCarroCompras((prevCarroCompras) => {
      const pizzaExistente = prevCarroCompras.find(
        (pizza) => pizza.id.toLowerCase() === id.toLowerCase()
      );
      if (pizzaExistente) {
        return prevCarroCompras.map((pizza) =>
          pizza.id.toLowerCase() === id.toLowerCase() ? { ...pizza, count: pizza.count + 1 } : pizza
        );
      } else {
        return [...prevCarroCompras, pizzaToAdd];
      }
    });

    // Actualizamos el total del carro
    setTotalCarro((prevTotal) => prevTotal + price);
  };

  return (
    <div className='card col-12 col-sm-6 col-md-4 mb-4' key={id}>
      <img src={img} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title fw-semibold fs-5'>Pizza {name}</h5>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item' key={id + "ingr"}>
          <h5 className='card-text text-center mb-1'>Ingredientes</h5>

          <ul className='list-group'>
            <p className='card-text text-center fs-6'>
              {renderIngredients(ingredients)}
            </p>
          </ul>
        </li>
        <li className='list-group-item' key={id + "desc"}>
          <p className='card-text text-center fs-6'>{desc}</p>
        </li>
        <li className='list-group-item' key={id + "pric"}>
          <p className='text-center fw-semibold fs-3'>
            Precio: ${price.toLocaleString("es-cl")}
          </p>
        </li>
      </ul>
      <div className='card-body d-flex justify-content-between'>
        <Link to={`/Pizza/${id}`} className='btn btn-light'>
          Ver Más 👀
        </Link>
        <a className='btn btn-dark' onClick={agregarAlCarrito}>
          Añadir 🛒
        </a>
      </div>
    </div>
  );
};
export default CardPizza;

const renderIngredients = (ingredients = []) => {
  return ingredients.map((i, index) => (
    <li className='list-group-item' key={index}>
      🍕 {i}
    </li>
  ));
};
