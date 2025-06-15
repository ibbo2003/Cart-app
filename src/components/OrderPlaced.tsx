
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  const [address, setAddress] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedAddress = sessionStorage.getItem("address");
    const storedCart = sessionStorage.getItem("cart");

    if (storedAddress && storedCart) {
      setAddress(JSON.parse(storedAddress));
      setCart(JSON.parse(storedCart));
    }
  }, []);

  if (!address || cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h4>No order found</h4>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-success"><i className="bi bi-cart-check-fill"></i> Order Placed Successfully!</h3>

      <h5>Shipping To:</h5>
      <p>
        {address.fullName}<br />
        {address.street}, {address.city} - {address.pincode}<br />
        <i className="bi bi-telephone"></i>{address.phone}
      </p>

      <h5 className="mt-4">Order Summary:</h5>
      <ul className="list-group mb-3">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <h5>Total: <span className="text-primary">${total.toFixed(2)}</span></h5>
      <Link to="/" className="btn btn-primary">
        Go to Products Page
      </Link>
    </div>
  );
};

export default OrderPlaced;
