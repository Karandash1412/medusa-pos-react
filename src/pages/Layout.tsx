// import Catalog from "../components/Catalog";
// import Cart from "../components/Cart";
// import CartTotals from "../components/CartTotals";

import { Link, useNavigate } from 'react-router-dom';
import "../styles/layout.css";

const Layout = () => {
  const navigate = useNavigate();

  return (
    // <div>
    //   <Catalog />
    //   <Cart />
    //   <CartTotals />
    // </div>
    <div className='main-menu'>
      <header>
        <h1 className='page-name'>Main Menu</h1>
      </header>
      <nav className='back-menu'>
        <Link to={".."} onClick={() => {
          navigate(-1);
        }}>← Back to Menu</Link>
      </nav>
      <nav>
        <ul>
          <Link to="/select-customer"><li>Existing Customer</li></Link>
          <Link to="/register-customer"><li>New Customer</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
