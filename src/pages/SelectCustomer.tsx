import { Link, useNavigate } from "react-router-dom";
import Customer from "../components/Cutomer";
import customers from "../assets/customers"
import { useQuery } from "@tanstack/react-query";
import "../styles/selectCustome.css";

const SelectCustomer = ({ setClient, setEnable }: { setClient: any, setEnable: (enable: boolean) => void }) => {
    const navigate = useNavigate();
    const customerQuery = useQuery({
        queryKey: ["customer"],
        // get API request from the medusa server
        //import {getCustomers} from "./api/Customers";
        // queryFn: getCustomers,
        queryFn: () => [...customers],
    });

    if (customerQuery.isLoading) return <h1>Loading...</h1>
    if (customerQuery.isError) return <pre>{JSON.stringify(customerQuery.error)}</pre>

    function handleClick(name: any) {
        setClient(customers.find((clientName) => clientName.fName === name));
        setEnable(false);
        navigate("/shopping-panel");
    }

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
                        {customerQuery.data.map((e) => {
                            return <Customer handleClick={handleClick} name={e.fName} surname={e.lName} key={e.id} />
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SelectCustomer;