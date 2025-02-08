import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Register = () => {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col'>
          <Navbar></Navbar>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
export default Register;