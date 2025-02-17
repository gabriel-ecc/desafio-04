import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";

const Cart = () => {
  const updateTotal = (lista) => {
    let monto = 0;
    for (const pizza of lista) {
      monto += pizza.count * pizza.price;
    }
    return monto;
  };

  const [miCarrito, setMiCarrito] = useState(pizzaCart);
  const [totalCarrito, setTotalCarrito] = useState(updateTotal(miCarrito));

  const handleChange = (e) => {
    setPizza((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const agregarCantidad = (id) => {
    
  };

  const diminuirCantidad = (id) => {
    
  };

  return (
    <>
      <div id='carrito' className="p-2">
        {miCarrito.map((p) => (
          <div className='card mb-3' key={p.id}>
            <div className='row g-0'>
              <div className='col-md-4'>
                <img src={p.img} className='img-fluid rounded-start' />
              </div>
              <div className='col-md-8'>
                <div className='card-body d-flex justify-content-around align-self-center'>
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">${p.price.toLocaleString("es-cl")}</p>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={diminuirCantidad(p.id)}>
                    -
                  </button>
                  <p className="card-text">{p.count}</p>
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={agregarCantidad(p.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="fs-1 text-info">Total: ${totalCarrito.toLocaleString("es-cl")}</p>
    </>
  );
};

export default Cart;
