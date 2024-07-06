import "../styles/main.css"
import { Link } from 'react-router-dom';
// import { useState } from "react";
import StripeTerminals from "../components/StripeTerminals"
const Main = ({ detectTerminal, setIsLogged }) => {
    // const [terminal, setTerminal] = useState("Please select the terminal");

    return (
        <div className="main-page">
            <header>
                <h1 className="page-name"> Main Menu</h1>
                <StripeTerminals name={detectTerminal} />
            </header>
            <nav>
                <ul>
                    <Link to="/orders"><li>Continue Order</li></Link>
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
