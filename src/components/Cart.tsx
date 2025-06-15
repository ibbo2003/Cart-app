import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, IncreaseQuantity, DecreaseQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h4>Your Cart is Empty</h4>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Items In The Cart</h2>
      <ul className="list-group mb-3">
        {cart.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.name}</strong>{" "}
              <span className="text-muted ">{item.quantity}</span>
            </div>

            <div>
              <span className="text-success me-2">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className="btn border"
                onClick={() => DecreaseQuantity(item.id)}
              >
                -
              </button>
              <button
                className="btn border ms-2"
                onClick={() => IncreaseQuantity(item.id)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Total:</h5>
        <h5 className="text-primary">${total.toFixed(2)}</h5>
      </div>

      <div className="d-flex justify-content-between">
        <Link to="/address" className="btn btn-primary">
          Choose Address
        </Link>
        <button onClick={clearCart} className="btn btn-outline-danger">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Cart;
