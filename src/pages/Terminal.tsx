import { Link, useNavigate } from 'react-router-dom';
import StripeTerminals from "../components/StripeTerminals";
import stripeTerminals from "../assets/stripeTerminals";
import { useQuery } from "@tanstack/react-query";
import "../styles/stripeTerminal.css";


const Terminal = ({ setDetectTerminal }: { setDetectTerminal: (detectTerminal: string) => void }) => {
    const navigate = useNavigate();
    const terminalQuery = useQuery({
        queryKey: ["terminal"],
        // get API request from the medusa server
        //import {getStripeTerminals} from "./api/stripeTerminals";
        // queryFn: getStripeTerminals,
        queryFn: () => [...stripeTerminals],
    });
    if (terminalQuery.isLoading) return <h1>Loading...</h1>
    if (terminalQuery.isError) return <pre>{JSON.stringify(terminalQuery.error)}</pre>

    return (
        <div>
            <header>
                <h1 className='page-name'>Connect Stripe Terminal</h1>
            </header>
            <nav className='back-menu'>
                <Link to={".."} onClick={() => {
                    navigate(-1);
                }}>← Back to Menu</Link>
            </nav>
            <main className='terminals'>
                {terminalQuery.data.map((e) => <StripeTerminals selectTerminal={(e: any) => {
                    setDetectTerminal(e.target.innerText);
                    navigate("/")
                }} key={e.id} name={e.name} />
                )}
            </main>
        </div>
    );
};
export default Terminal;
