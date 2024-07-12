import { Link, useNavigate } from 'react-router-dom';
import StripeTerminals from "../components/StripeTerminals";
import stripeTerminals from "../assets/stripeTerminals";
import "../styles/stripeTerminal.css";


const Terminal = ({ setDetectTerminal }: { setDetectTerminal: (detectTerminal: string) => void }) => {
    const navigate = useNavigate();

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
                {stripeTerminals.map((e) => <StripeTerminals selectTerminal={(e: any) => {
                    setDetectTerminal(e.target.innerText);
                    navigate("/")
                }} key={e.id} name={e.name} />
                )}
            </main>
        </div>
    );
};
export default Terminal;
