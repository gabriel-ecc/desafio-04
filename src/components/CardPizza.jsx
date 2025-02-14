const CardPizza = ({ id, name, price, ingredients, desc, url }) => {
  return (
    <div className='card col-12 col-sm-6 col-md-4 mb-4' Key={id}>
      <img src={url} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title fw-semibold fs-5'>Pizza {name}</h5>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item' Key={id + "ingr"}>
          <h5 className='card-text text-center mb-1'>Ingredientes</h5>
          <p className='card-text text-center fs-6'>
            <ul className="list-group">{renderIngredients(ingredients)}</ul>
          </p>
        </li>
        <li className='list-group-item' Key={id + "desc"}>
          <p className='card-text text-center fs-6'>{desc}</p>
        </li>
        <li className='list-group-item' Key={id + "pric"}>
          <p className='text-center fw-semibold fs-3'>
            Precio: ${price.toLocaleString("es-cl")}
          </p>
        </li>
      </ul>
      <div className='card-body d-flex justify-content-between'>
        <a href='#' className='btn btn-light'>
          Ver Más 👀
        </a>
        <a href='#' className='btn btn-dark'>
          Añadir 🛒
        </a>
      </div>
    </div>
  );
};
export default CardPizza;

const renderIngredients = (ingredients) => {
  return ingredients.map((i) => <li className="list-group-item">🍕 {i}</li>);
};
