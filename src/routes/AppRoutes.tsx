import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { appRoutes } from './Routes';

interface RouteComponentProps {
    setEnable: (disable: boolean) => void;
    setClient: (client: any) => void;
    setIsLogged: (isLoggedIn: boolean) => void;
    setDetectTerminal: (detectTerminal: string) => void;
}

const AppRoutes = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [detectTerminal, setDetectTerminal] = useState("Please select the terminal");
    const [disable, setEnable] = useState(true);
    const [client, setClient] = useState("");
    return (
        <Router>
            <Routes>
                {appRoutes.map((route) => {
                    if (route.requiresAuth && !isLogged) {
                        return <Route key={route.path} path={route.path} element={<Navigate replace to={"/login"} />} />;
                    } else {
                        return <Route key={route.path} path={route.path} element={<route.component setEnable={setEnable} setClient={setClient} disable={disable} setIsLogged={setIsLogged} detectTerminal={detectTerminal} setDetectTerminal={setDetectTerminal} client={client} />} />
                    }
                })}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
// import Main from '../pages/Main';
// import Layout from '../pages/Layout';
// import Register from '../pages/Registration';
// import Checkout from '../pages/Checkout';
// import Login from '../pages/Login';
// import Terminal from "../pages/Terminal";
// import SelectCustomer from "../pages/SelectCustomer";
// import NotFound from '../components/NotFound';
// import ShoppingPanel from '../pages/ShoppingPannel';
// import CreditCard from '../pages/CreditCard';
// import Success from '../pages/Success';
// import { appRoutes } from './Routes';

{/* <Route path="/" element={isLogged ? (<Main setEnable={setEnable} setClient={setClient} disable={disable} setIsLogged={setIsLogged} detectTerminal={detectTerminal} />) : (<Navigate replace to={"/login"} />)} />
                <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />

                <Route path="/new-order" element={<Layout />} />
                <Route path="/register-customer" element={<Register />} />
                <Route path="/terminal" element={<Terminal setDetectTerminal={setDetectTerminal} />} />
                <Route path="/select-customer" element={<SelectCustomer setEnable={setEnable} setClient={setClient} />} />
                <Route path="/shopping-panel" element={<ShoppingPanel setEnable={setEnable} setClient={setClient} disable={disable} client={client} />} />
                <Route path="/checkout" element={<Checkout setClient={setClient} />} />
                <Route path="/credit-card" element={<CreditCard client={client} />} />
                <Route path="/success" element={<Success />} />

                <Route path='*' element={<NotFound />} /> */}