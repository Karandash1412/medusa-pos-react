import "../styles/main.css"
import { Link } from 'react-router-dom';
import StripeTerminals from "../components/StripeTerminals"

const Main = ({ detectTerminal, disable, setIsLogged }: { detectTerminal: string, disable: boolean, setIsLogged: (isLogged: boolean) => void }) => {
    console.log(disable);

    return (
        <div className="main-page">
            <header>
                <h1 className="page-name"> Main Menu</h1>
                <StripeTerminals name={detectTerminal} />
            </header>
            <nav>
                <ul>
                    {!disable ? (<Link to="/orders"><li>Continue Order</li></Link>) : (<Link to="#" id="disable"><li id="disable">Continue Order</li></Link>)}
                    <Link to="/register-customer"><li>Register New Customer</li></Link>
                    <Link to="/terminal"><li>Connect Terminal</li></Link>
                    <Link to="/new-order"><li>Select Customer (new order)</li></Link>
                    <Link to="/catalog"><li>Browse Catalog</li></Link>
                    <Link className="color" to="/login" onClick={() => {
                        setIsLogged(false);
                    }}><li>Log Out</li></Link>
                </ul>
            </nav >
        </div >
    );
};

export default Main;
