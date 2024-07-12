import "../styles/shoppingPanel.css"
import { Link, useNavigate } from "react-router-dom";
import ProductCards from "../assets/ProductsCard";
import Product from "../components/Product";

const ShoppingPanel = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <h1 className='page-name'>Shopping Panel</h1>
            </header>
            <nav className='back-menu shopping-nav-bar'>
                <Link to={".."} onClick={() => {
                    navigate(-1);
                }}>← Back to Menu</Link>
                <div className="search-bar">
                    <p>🔎 Search Product</p>
                    <input type="text" placeholder="Search Product..." />
                </div>
                <Link to="/order-note">📝 Order Note</Link>
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
                            {ProductCards.map((e) => {
                                return <Product key={e.id} name={e.name} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="panel-right-side">
                    <div className="search-bar">
                        <p>🛒 Cart</p>
                        <div className="summery">
                            <div className="summery-customer">
                                <Link to="">👨Customer</Link>
                            </div>
                            <div className="panel-product">
                                <div>
                                    <p>Product 1</p>
                                </div>
                                <div>
                                    <p>Product 2</p>
                                </div>
                            </div>
                            <div className="panel-product">
                                <div className="cart-totals">
                                    <p>Cart Totals</p>
                                </div>
                            </div>
                            <Link className="btn-checkout" to="/checkout">Checkout</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ShoppingPanel;