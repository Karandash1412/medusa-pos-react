import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/OrderNote.css";

const OrderNote = ({ setClient, client }: { client: any, setClient: (client: any) => void }) => {
    const navigate = useNavigate();
    const [note, setNote] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }
    const handleSubmit = () => {
        const updatedCart = client.notes ? [...client.notes, note] : [note];

        setClient((prevValue: any) => { return { ...prevValue, notes: updatedCart } })
        setNote("")
    }

    const deleteNote = (index: number) => {
        setClient((prevValue: any) => {
            const updatedNotes = prevValue.notes.filter((_: any, note: number) => note !== index)
            return { ...prevValue, notes: updatedNotes };
        })
    }
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
                <div className="input-note">
                    <input type="text" placeholder="Order Notes" onChange={handleChange} value={note} />
                    <button type="submit" className=" btn-order-note" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="notes">
                    <ul>
                        {client.notes?.map((title: string, index: number) => (
                            <li key={index} onClick={() => deleteNote(index)}>{title}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
};
export default OrderNote;