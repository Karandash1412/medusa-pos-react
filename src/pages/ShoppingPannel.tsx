import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Products from "../components/Products";
import Customer from "../components/Customer";
import { medusa } from "../lib/medusa-provider";
import { useEffect, useState } from "react";
import "../styles/shoppingPanel.css";
import Product from "../components/Products";

const ShoppingPanel = ({ client, disable, setClient, setEnable }: { client: any; disable: boolean; setClient: any; setEnable: (enable: boolean) => void; }) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const storedClient = localStorage.getItem("client");
        if (storedClient) {
            setClient(JSON.parse(storedClient));
            setEnable(false);
        }
    }, [setClient, setEnable]);

    // Query for customers
    const { isLoading: customerIsLoading, isError: customerIsError, data: customersData, error: customerError, } = useQuery({
        queryKey: ["customer"],
        queryFn: async () => {
            const response = await medusa.admin.customers.list();
            return response.customers;
        },
    });

    // Query for products
    const { isLoading: productIsLoading, isError: productIsError, data: productQuery, error: productError, } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await medusa.admin.products.list();
            return response.products;
        },
    });

    // Handle loading and error states for customers
    if (customerIsLoading) return <h1>Loading...</h1>;
    if (customerIsError) {
        const typedError = customerError as Error;
        return <div>Error: {typedError.message}</div>;
    }

    const filteredProducts = productQuery?.filter((product) => {
        const result = product.title?.toLowerCase();
        return result?.includes(search.toLowerCase())
    }) ?? [];

    // Update selectProduct to use the API-based draft order mutation
    function selectProduct(productId: string) {
        const selectedProduct = productQuery?.find((product: any) => product.id === productId);

        const updatedCart = client.customerOrder ? [...client.customerOrder, selectedProduct] : [selectedProduct];
        const orderLength = updatedCart.length;
        updatedCart[updatedCart.length - 1] = { ...selectedProduct, uniqueId: orderLength };

        setClient((prevInfo: any) => ({
            ...prevInfo,
            customerOrder: updatedCart
        }));
    }
    // Handle client selection
    function handleClickClient(id: string) {
        const selectedClient = customersData?.find((customer: any) => customer.id === id);
        if (selectedClient) {
            const updatedClient = { ...selectedClient, customerOrder: [] };
            localStorage.setItem("client", JSON.stringify(updatedClient));
            setClient(updatedClient);
            setEnable(false);
            // const storedClient = JSON.parse(localStorage.getItem("client") || "{}");
            // setClient(storedClient);
            // setEnable(false);
        }
    }

    function deleteProduct(uniqueId: string) {
        setClient((prevInfo: any) => {
            const updatedOrder = prevInfo.customerOrder.filter((product: any) => product.uniqueId !== uniqueId);
            return { ...prevInfo, customerOrder: updatedOrder };
        });
    }

    const handleCheckout = async () => {
        const items = client.customerOrder.map((product: any) => ({
            variant_id: product.variants[0].id,
            title: product.title,
            quantity: 1,
        }));
        // console.log(items);
        const email = client.email;
        const region_id = 'reg_01J5CG09VEMADX7MHZ2AV65DA6';

        const shippingOptionsResponse = await medusa.admin.shippingOptions.list({
            region_id: region_id,
        });
        const shippingOptions = shippingOptionsResponse.shipping_options

        const createDraftOrder = await medusa.admin.draftOrders.create({
            email,
            region_id,
            items,
            shipping_methods: [
                {
                    option_id: shippingOptions[0].id,
                },
            ],
        })

        console.log(createDraftOrder);
    };

    const searchEngine = (e: any) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <header>
                <h1 className="page-name">Shopping Panel</h1>
            </header>
            <nav className="back-menu shopping-nav-bar">
                {disable ? (
                    <Link to={".."} onClick={() => navigate(-1)}>
                        ← Back to Menu
                    </Link>
                ) : (
                    <Link to={"/"}>← Back to Menu</Link>
                )}
                <div className="search-bar">
                    <p>🔎 Search Product</p>
                    <input type="text" placeholder="Search Product..." onChange={searchEngine} value={search} />
                    {/* {filterProduct?.length > 0 ? (filterProduct?.map(product)=>{
                        <Product key={product.id} title={product.title} selectProduct={() => selectProduct(product.id)} />
                    }):(
                    <p>No customers found.</p>
                    )} */}
                </div>
                {!disable ? (
                    <Link to="/order-note">
                        <li>📝 Order Note</li>
                    </Link>
                ) : (
                    <Link to="#" id="disable">
                        <li id="disable">📝 Order Note</li>
                    </Link>
                )}
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
                            {!disable ? (
                                productIsLoading ? (
                                    <h2>Loading Products...</h2>
                                ) : productIsError ? (
                                    <h2>Error Loading Product Cards: {(productError as Error).message}</h2>
                                ) : (
                                    filteredProducts.length > 0 ? (
                                        filteredProducts?.map((product: any) => (
                                            <Product key={product.id} title={product.title} selectProduct={() => selectProduct(product.id)} />
                                        ))
                                    ) : (
                                        <p>No products found.</p>
                                    )
                                )
                            ) : (
                                <h2>Select the customer first</h2>
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
                                    <h2>
                                        👨 Customer is {client.first_name} {client.last_name}
                                    </h2>
                                </div>
                                <div className="panel-product">
                                    {(client.customerOrder?.map((e: any) => <Products key={e.id} title={e.title} selectProduct={() => deleteProduct(e.uniqueId)} />))}
                                </div>
                                <div className="panel-product">
                                    <div className="cart-totals">
                                        <p>Cart Totals</p>
                                    </div>
                                </div>
                                <button className="btn-checkout" onClick={handleCheckout}>Checkout</button>
                            </div>
                        ) : (
                            <div className="summery">
                                <div className="customer-results shopping-cart">
                                    {customersData.map((e: any) => (
                                        <Customer
                                            handleClick={handleClickClient}
                                            name={e.first_name}
                                            surname={e.last_name}
                                            key={e.id}
                                            id={e.id}
                                        />
                                    ))}
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
