import "../styles/checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = ({ setClient }: { setClient: any }) => {

  const [selecte, setSelecte] = useState(4);
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    setSelecte(index);
  };

  const submitCheckout = () => {

    setClient((prevValue: any) => {
      if (selecte === 0) {
        return {
          ...prevValue,
          card: "Credit/Debit Card (Terminal)",
        }
      } else {
        return {
          ...prevValue,
          card: "Credit/Debit Card (Digital)",
        }
      }
    })
    navigate("/creditCard");
  }
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
        <li><button onClick={() => handleClick(0)} className={selecte === 0 ? "btn-option selected" : "btn-option"}> Credit/Debit Card (Terminal)</button></li>
        <li><button onClick={() => handleClick(1)} className={selecte === 1 ? "btn-option selected" : "btn-option"}>Credit/Debit Card (Digital)</button></li>
        <li><button onClick={() => handleClick(2)} className={selecte === 2 ? "btn-option selected" : "btn-option"}>Draft Order</button></li>
      </ul>
    </nav>
    <nav className="checkout-options">
      <ul className="checkout-options">
        <li><button className="btn-option" id="continue" onClick={submitCheckout}>Continue</button></li>
      </ul>
    </nav>
  </div>
  );
};

export default Checkout;
