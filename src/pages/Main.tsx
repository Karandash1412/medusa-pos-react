import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <header>
                <div>
                    <img src="" alt="" />
                    <h4>Pavlo Tsyhanok</h4>
                    <p>Medusa Co.</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </header>
            <nav>
                <ul>
                    <li><Link to="/orders">Continue Order <span>(Van Designs)</span></Link></li>
                    <li><Link to="/new-order">Select Customer (new order)</Link></li>
                    <li><Link to="/register-customer">Register New Customer</Link></li>
                    <li><Link to="/catalog">Browse Catalog</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Main;
