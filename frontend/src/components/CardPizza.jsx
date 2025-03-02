import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, desc, url }) => {
  return (
    <div className='card col-12 col-sm-6 col-md-4 mb-4' key={id}>
      <img src={url} className='card-img-top' alt={name} />
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
        <a href='#' className='btn btn-dark'>
          Añadir 🛒
        </a>
      </div>
    </div>
  );
};
export default CardPizza;

const renderIngredients = (ingredients = []) => {
  return ingredients.map((i) => <li className='list-group-item'>🍕 {i}</li>);
};
