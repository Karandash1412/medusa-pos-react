import { Link, useNavigate } from "react-router-dom";
import "../styles/OrderNote.css";

const OrderNote = () => {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <h1 className='page-name'>Product Page</h1>
            </header>
            <nav className='back-menu back-checkout'>
                <Link to={".."} onClick={() => {
                    navigate(-1);
                }}>← Back to Catalog</Link>
            </nav>
            <main className="order-note">
                <input type="text" placeholder="Order Notes" />
                <button type="submit" className=" btn-order-note">Submit</button>
            </main>
        </>
    );
}
export default OrderNote;