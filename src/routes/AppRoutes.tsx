import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main';
import Layout from '../pages/Layout';
import Register from '../pages/Registration';
import Settings from '../pages/Settings';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Terminal from "../pages/Terminal";
import SelectCustomer from "../pages/SelectCustomer";
import { useState } from 'react';
import NotFound from '../components/NotFound';
import ShoppingPanel from '../pages/ShoppingPannel';
import CreditCard from '../pages/CreditCard';
import Success from '../pages/Success';

const AppRoutes = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [detectTerminal, setDetectTerminal] = useState("Please select the terminal");
    const [disable, setEnable] = useState(true);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLogged ? (<Main disable={disable} setIsLogged={setIsLogged} detectTerminal={detectTerminal} />) : (<Navigate replace to={"/login"} />)} />
                <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />

                <Route path="/new-order" element={<Layout />} />
                <Route path="/register-customer" element={<Register />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/terminal" element={<Terminal setDetectTerminal={setDetectTerminal} />} />
                <Route path="/selectCustomer" element={<SelectCustomer />} />
                <Route path="/shopping-panel" element={<ShoppingPanel />} />
                <Route path="/creditCard" element={<CreditCard />} />
                <Route path="/success" element={<Success />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
