import "../styles/main.css"
import { Link } from 'react-router-dom';
import StripeTerminals from "../components/StripeTerminals"

const Main = ({ setEnable, setClient, detectTerminal, disable, setIsLogged }: { setEnable: (disable: boolean) => void, setClient: any, detectTerminal: string, disable: boolean, setIsLogged: (isLogged: boolean) => void }) => {

    return (
        <div className="main-page">
            <header>
                <h1 className="page-name"> Main Menu</h1>
                <StripeTerminals name={detectTerminal} />
            </header>
            <nav>
                <ul>
                    {!disable ? (<Link to="/shopping-panel"><li>Continue Order</li></Link>) : (<Link to="#" id="disable"><li id="disable">Continue Order</li></Link>)}
                    <Link to="/register-customer"><li>Register New Customer</li></Link>
                    <Link to="/terminal"><li>Connect Terminal</li></Link>
                    <Link to="/new-order"><li>Select Customer (new order)</li></Link>
                    <Link to="/shopping-panel"><li>Browse Catalog</li></Link>
                    <Link className="color" to="/login" onClick={() => {
                        setEnable(true);
                        setClient("");
                        setIsLogged(false);
                    }}><li>Log Out</li></Link>
                </ul>
            </nav >
        </div >
    );
};

export default Main;
