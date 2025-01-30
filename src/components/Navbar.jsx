import { Button } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
    const total = 25000;
    const token = false;


    return (
        <section className='navbar'>
            <p>Pizzería Mamma Mia!</p>
            <Button type="button" className="btn">Home</Button>
            {token?botonesTrue():botonesFalse()}
            <Button>Total: ${total.toLocaleString('es-cl')}</Button>
        </section>
    );
}
export default Navbar;

const botonesTrue = () =>{
    return (
        <>
        <Button>Profile</Button>
        <Button>Logout</Button>
        </>
    );
}

const botonesFalse = () =>{
    return (
        <>
        <Button>Log In</Button>
        <Button>Registrer</Button>
        </>
    );
}