import "../styles/shoppingPanel.css"
import { Link, useNavigate, } from "react-router-dom";
import productCards from "../assets/ProductsCard";
import Product from "../components/Product";
import Customer from "../components/Cutomer";
import customers from "../assets/customers";

const ShoppingPanel = ({ client, disable, setClient, setEnable }: { client: any, disable: boolean, setClient: any, setEnable: (enable: boolean) => void }) => {
    const navigate = useNavigate();

    function handleClick(name: any) {
        setClient(customers.find((clientName) => clientName.fName === name));
        setEnable(false);
    }

    function selectProduct(name: string) {
        const selectedProduct = productCards.find((productName) => productName.name === name);
        const updatedCart = [...client.cartProduct, selectedProduct];
        setClient({ ...client, cartProduct: updatedCart });

    }

    return (
        <div>
            <header>
                <h1 className='page-name'>Shopping Panel</h1>
            </header>
            <nav className='back-menu shopping-nav-bar'>
                {disable ? (<Link to={".."} onClick={() => {
                    navigate(-1);
                }}>← Back to Menu</Link>
                ) : (
                    <Link to={"/"}>← Back to Menu</Link>
                )}
                <div className="search-bar">
                    <p>🔎 Search Product</p>
                    <input type="text" placeholder="Search Product..." />
                </div>
                {!disable ? (<Link to="/order-note"><li>📝 Order Note</li></Link>) : (<Link to="#" id="disable"><li id="disable">📝 Order Note</li></Link>)}
            </nav>
            <main className="main-panel">
                <div className="panel-left-side">
                    <div className="search-bar">
                        <p>Breadcrumbs</p>
                        <div className="categories">
                            <Link to="">Main Category</Link>
                            <Link to="">Category 1</Link>
                        </div>
                    </div>
                    <div className="search-bar">
                        <p>📦 Product Browser</p>
                        <div className="product-container">
                            {productCards.map((e) => {
                                return <Product key={e.id} name={e.name} selectProduct={selectProduct} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="panel-right-side">
                    <div className="search-bar">
                        <p>🛒 Cart</p>
                        {!disable ? (
                            <div className="summery">
                                <div className="summery-customer">
                                    <h2>👨Customer {client.fName} {client.lName}</h2>
                                </div>
                                <div className="panel-product">
                                    {client.cartProduct.map((e: any) => <Product key={e.id} name={e.name} />)}
                                </div>
                                <div className="panel-product">
                                    <div className="cart-totals">
                                        <p>Cart Totals</p>
                                    </div>
                                </div>
                                <Link className="btn-checkout" to="/checkout">Checkout</Link>
                            </div>
                        ) : (
                            <div className="summery">
                                <div className="customer-results shopping-cart">
                                    {customers.map((e) => { return <Customer handleClick={handleClick} name={e.fName} surname={e.lName} key={e.id} /> })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ShoppingPanel;