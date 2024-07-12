import { Link, useNavigate } from "react-router-dom";
import Customer from "../components/Cutomer";
import customers from "../assets/customers"
import "../styles/selectCustome.css";

const SelectCustomer = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <h1 className='page-name'>New Order → Select Customer</h1>
            </header>
            <nav className='back-menu'>
                <Link to={".."} onClick={() => {
                    navigate(-1);
                }}>← Back to Menu</Link>
            </nav>
            <main className="select-customer-menu">
                <div className="search-bar">
                    <p>Search</p>
                    <input type="text" placeholder="Search Customer Name" />
                </div>
                <div className="search-results">
                    <p>Search Results</p>
                    <div className="customer-results">
                        {customers.map((e) => {
                            return <Customer name={e.name} />
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SelectCustomer;