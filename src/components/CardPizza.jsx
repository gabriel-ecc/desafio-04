const CardPizza = ({ name, price, ingredients, url }) => {
  let textoIngredientes = "";
  for (let i = 0; i < ingredients.length; i++) {
    textoIngredientes += ingredients[i];
    if (i < ingredients.length - 1) {
      textoIngredientes += ", ";
    }
  }
  textoIngredientes += ".";

  return (
    <div className='card col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <img src={url} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title fw-semibold fs-5'>Pizza {name}</h5>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <p className='card-text text-center'>Ingredientes:</p>
          <p className='card-text text-center fs-6'>🍕 {textoIngredientes}</p>
        </li>
        <li className='list-group-item'>
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
