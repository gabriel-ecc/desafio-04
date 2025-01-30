import HeaderImg from '../assets/img/Header.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='section-header'>
            <img src={HeaderImg} className='header-img' alt="Header" />
            <div className="header-text"> 
                <h1>¡Pizzería Mamma Mia!</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </div>
    );
}
export default Header;