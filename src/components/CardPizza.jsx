


const CardPizza = ({name, price, ingredients, url}) => {
    let textoIngredientes = "";
    for (const ingrediente of ingredients) {
        textoIngredientes += " "+ingrediente;
    }
    textoIngredientes+= "."
    

    return (
        <div className="card w-50">
            <img className="card-img-top" src={url} alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-dark">{textoIngredientes}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default CardPizza;