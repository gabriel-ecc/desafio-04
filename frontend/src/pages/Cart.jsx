import { useContext, useMemo } from "react";

import { PizzaContext } from "../contexts/pizzas-content";

const Cart = () => {
  const { carroCompras, setCarroCompras, setTotalCarro } =
    useContext(PizzaContext);


  const agregarCantidad = (p) => {
    setCarroCompras((prevCarroCompras) => {
      return prevCarroCompras.map((pizza) => {
        if (pizza.id === p.id) {
          return { ...pizza, count: pizza.count + 1 };
        }
        return pizza;
      });
    });
  };

  const diminuirCantidad = (p) => {
    setCarroCompras((prevCarroCompras) => {
      return prevCarroCompras
        .map((pizza) => {
          if (pizza.id === p.id) {
            const nuevoCount = pizza.count - 1;
            if (nuevoCount <= 0) {
              return null;
            }
            return { ...pizza, count: nuevoCount };
          }
          return pizza;
        })
        .filter(Boolean);
    });
  };

  const productosOrdenados = useMemo(() => {
    return [...carroCompras].sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
  }, [carroCompras]);

  const totalCarro = useMemo(() => {
    let monto = 0;
    for (const pizza of carroCompras) {
      monto += pizza.count * pizza.price;
    }
    return monto;
  }, [carroCompras]);

  // Actualiza el total en el contexto solo cuando cambia el total calculado
  useMemo(() => {
    setTotalCarro(totalCarro);
  }, [totalCarro, setTotalCarro]);

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
                    onClick={() => diminuirCantidad(p)}>
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
