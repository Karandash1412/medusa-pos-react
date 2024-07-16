import { Link, useNavigate } from "react-router-dom";
import "../styles/creditCard.css";

const CreditCard = ({ client }: { client: any }) => {
    const navigate = useNavigate();

    const charge = () => {
        console.log(client);
        navigate("/success");
    }
    return (
        <div>
            <header>
                <h1 className='page-name'>Checkout → Credit Card</h1>
            </header>
            <nav className='back-menu back-checkout'>
                <Link to={".."} onClick={() => {
                    navigate(-1);
                }}>← Back to Checkout Options</Link>
                <p>Enter Credit Card Details</p>
            </nav>
            <main className="credit-checkout">
                <p>Card Details</p>
                <form action="" className="credit-checkout">
                    <input type="text" placeholder="Card Number" required />
                    <div className="card-security">
                        <input type="text" placeholder="MM/YY" required />
                        <input type="text" placeholder="CVV" required />
                    </div>
                </form>
            </main>
            <nav className="checkout-options">
                <ul className="checkout-options">
                    <li><button onClick={charge} className="btn-option" id="continue">Charge</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default CreditCard;