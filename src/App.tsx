import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/bootstrap-icons.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { CartProvider, useCart } from "./contexts/CartContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Address from "./components/Address";
import OrderPlaced from "./components/OrderPlaced";

const AppContent = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-4 py-3">
        <Link className="navbar-brand" to="/">
          Shop
        </Link>
        <div className="d-flex w-100">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Products
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link position-relative" to="/cart">
              <i className="bi bi-cart"></i> 
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address/>}/>
          <Route path="/orderplaced" element={<OrderPlaced/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
