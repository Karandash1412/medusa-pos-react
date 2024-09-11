import { Link, useNavigate } from "react-router-dom";
import Customer from "../components/Customer";
import { useQuery } from "@tanstack/react-query";
import { medusa } from "../lib/medusa-provider";
import "../styles/selectCustome.css";


const SelectCustomer = ({ setClient, setEnable }: { setClient: any, setEnable: (enable: boolean) => void }) => {
    const navigate = useNavigate();

    // Fetch customers from Medusa API
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['customer'],
        queryFn: async () => {
            const response = await medusa.admin.customers.list();
            return response.customers; // Return customers array from response
        },
        // Optional: Add a stale time and cache time to control data refetching and caching
        staleTime: 60000, // 1 minute
        // cacheTime: 300000, // 5 minutes
    });

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) {
        const typedError = error as Error;
        return <pre>Error:{typedError.message}</pre>
    }

    function handleClick(id: string) {
        setClient(data?.find((client: any) => client.id === id));
        setEnable(false);
        navigate('/shopping-panel');
        // console.log(data?.find((client: any) => client.id === id));
    }

    return (
        <div>
            <header>
                <h1 className='page-name'>New Order → Select Customer</h1>
            </header>
            <nav className='back-menu'>
                <Link to='..' onClick={() => navigate(-1)}>← Back to Menu</Link>
            </nav>
            <main className='select-customer-menu'>
                <div className='search-bar'>
                    <p>Search</p>
                    <input type='text' placeholder='Search Customer Name' />
                </div>
                <div className='search-results'>
                    <p>Search Results</p>
                    <div className='customer-results'>
                        {data?.map((e: any) => (
                            <Customer
                                handleClick={handleClick}
                                name={e.first_name}
                                surname={e.last_name}
                                key={e.id}
                                id={e.id}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SelectCustomer;
