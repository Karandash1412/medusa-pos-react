import "../styles/shoppingPanel.css"
import { Link, useNavigate, } from "react-router-dom";
// import { Product } from "@medusajs/medusa";
// import { useProducts } from "medusa-react";
import { useQuery } from "@tanstack/react-query";
import productCards from "../assets/ProductsCard";
import Products from "../components/Products";
import Customer from "../components/Cutomer";
import customers from "../assets/customers";

const ShoppingPanel = ({ client, disable, setClient, setEnable }: { client: any, disable: boolean, setClient: any, setEnable: (enable: boolean) => void }) => {
    const navigate = useNavigate();
    // const { products, isLoading } = useProducts();
    const productQuery = useQuery({
        queryKey: ["product"],
        enabled: client?.fName != null && client?.lName != null,
        // get API request from the medusa server
        //import {getProductCards} from "./api/products";
        // queryFn: getProductCards,
        queryFn: () => [...productCards],
    });
    const customerQuery = useQuery({
        queryKey: ["customer"],
        // get API request from the medusa server
        //import {getCustomers} from "./api/Customers";
        // queryFn: getCustomers,
        queryFn: () => {
            console.log(customerQuery.data);
            return [...customers]
        },
    });
    if (customerQuery.isLoading) return <h1>Loading...</h1>
    if (customerQuery.isError) return <pre>{JSON.stringify(customerQuery.error)}</pre>

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
                            {/* {isLoading ? (
                                <div>Loading...</div>
                            ) : (
                                products?.map((product) => {
                                    return <Products key={product.id} name={product.title} selectProduct={selectProduct} />
                                })
                            )
                            } */}
                            {productQuery.isLoading
                                ? "Select the customer first"
                                : productQuery.isError
                                    ? "Eror Loading Product cards"
                                    : productQuery.data.map((e) =>
                                        <Products key={e.id} name={e.name} selectProduct={selectProduct} />
                                    )}
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
                                    {client.cartProduct.map((e: any) => <Products key={e.id} name={e.name} />)}
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
                                    {customerQuery.data.map((e) => {
                                        return <Customer handleClick={handleClick} name={e.fName} surname={e.lName} key={e.id} />
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main >
        </div >
    );
};

export default ShoppingPanel;