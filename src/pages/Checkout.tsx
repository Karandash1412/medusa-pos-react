import "../styles/checkout.css";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (<div>
    <header>
      <h1 className='page-name'>Checkout</h1>
    </header>
    <nav className='back-menu'>
      <Link to={".."} onClick={() => {
        navigate(-1);
      }}>← Back to Catalog</Link>
    </nav>
    <nav className="checkout-options">
      <ul className="checkout-options">
        <li><button className="btn-option"> Credit/Debit Card (Terminal)</button></li>
        <li><button className="btn-option">Credit/Debit Card (Digital)</button></li>
        <li><button className="btn-option">Draft Order</button></li>
      </ul>
    </nav>
    <nav className="checkout-options">
      <ul className="checkout-options">
        <li><Link to="/creditCard" className="btn-option" id="continue">Continue</Link></li>
      </ul>
    </nav>
  </div>
  );
};

export default Checkout;
