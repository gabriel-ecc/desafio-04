import HeaderImg from "../assets/img/Header.jpg";

const Header = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col position-relative'>
          <img
            src={HeaderImg}
            className='img-fluid rounded header-img opacity-25'
            alt='Header'
          />
          <div className='header-text text-center position-absolute top-50 start-50 translate-middle'>
            <h1 className='text-white'>¡Pizzería Mamma Mia!</h1>
            <p className='text-white'>
              ¡Tenemos las mejores pizzas que podrás encontrar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
