import './Navbar.css';

const Navbar = () => {
    const total = 25000;
    const token = false;


    return (
        <section className='navbar'>
            <p>Pizzería Mamma Mia!</p>
            <a href="#" className="btn btn-primary">Home</a>
            {token?botonesTrue():botonesFalse()}
            <a href="#" className="btn btn-primary">Total: ${total.toLocaleString('es-cl')}</a>
        </section>
    );
}
export default Navbar;

const botonesTrue = () =>{
    return (
        <>
        <a href="#" className="btn btn-primary">Profile</a>
        <a href="#" className="btn btn-primary">Logout</a>
        </>
    );
}

const botonesFalse = () =>{
    return (
        <>
        <a href="#" className="btn btn-primary">Log In</a>
        <a href="#" className="btn btn-primary">Registrer</a>
        </>
    );
}