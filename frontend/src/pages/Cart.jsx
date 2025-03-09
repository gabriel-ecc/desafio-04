import { useState, useContext } from "react";
import { pizzaCart } from "../assets/js/pizzas";
import { PizzaContext } from "../contexts/pizzas-content";

const Cart = () => {
  const { carroCompras, setCarroCompras } = useContext(PizzaContext);
  const { totalCarro, setTotalCarro } = useContext(PizzaContext);
  
  setCarroCompras(pizzaCart);
  updateTotal(carroCompras);
  

  const handleChange = (e) => {
    setPizza((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const agregarCantidad = (p) => {
    p.count += 1;
    const nuevaLista = carroCompras.filter((pizza) => pizza.id != p.id);
    setCarroCompras([...nuevaLista, p]);
    setTotalCarro(updateTotal(carroCompras));
  };

  const diminuirCantidad = (p) => {
    p.count -= 1;
    const nuevaLista = carroCompras.filter((pizza) => pizza.id != p.id);
    setCarroCompras([...nuevaLista, p]);
    if (p.count <= 0) {
      setCarroCompras([...nuevaLista]);
    }
  };

  const productosOrdenados = [...carroCompras].sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div id='carrito' className='p-2'>
        <h2 className='fs-1 text-info'>Mi Carrito de compras</h2>
        {productosOrdenados.map((p) => (
          <div className='card mb-3 w-50' key={p.id}>
            <div className='row g-0'>
              <div className='col-md-4'>
                <img src={p.img} className='w-75 rounded-start img-thumbnail' />
              </div>
              <div className='col-md-8'>
                <div className='card-body d-flex justify-content-around align-self-center'>
                  <h5 className='card-title text-capitalize'>{p.name}</h5>
                  <p className='card-text'>
                    ${p.price.toLocaleString("es-cl")}
                  </p>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => {
                      diminuirCantidad(p);
                      setTotalCarro(updateTotal(carroCompras));
                    }}>
                    -
                  </button>
                  <p className='card-text'>{p.count}</p>
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => agregarCantidad(p)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='fs-1 text-info'>
        Total: ${totalCarro.toLocaleString("es-cl")}
      </p>
    </>
  );
};

export default Cart;

const updateTotal = (lista) => {
  console.log('revision del cambio')
  let monto = 0;
  for (const pizza of lista) {
    monto += pizza.count * pizza.price;
  }
  return monto;
};
