import { useEffect, useState } from "react";
const Pizza = () => {
  const urlApi = "http://localhost:5000/api/pizzas/p001";
  const [pizza, setPizza] = useState([]);

  const getPizzas = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return setPizza(data);
  };

  useEffect(() => {
    getPizzas(urlApi);
  }, []);

  return (
    <div className='card mb-3 text-bg-light border-dark'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={pizza.img}
            className='img-fluid rounded-start'
            alt='Pizza'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{pizza.name}</h5>
            <p className='card-text'>{pizza.desc}</p>

            <ul className='list-group'>
              {renderIngredients(pizza.ingredients)}
            </ul>

            <p className='card-text'>${pizza.price}</p>
            <a href='#' className='btn btn-primary'>
              Añadir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;

const renderIngredients = (ingredients = []) => {
  return ingredients.map((i) => <li className='list-group-item'>🍕 {i}</li>);
};
