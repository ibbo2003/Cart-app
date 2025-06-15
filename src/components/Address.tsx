
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Address = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !address.fullName ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please fill in all fields.");
      return;
    }
    sessionStorage.setItem("address", JSON.stringify(address));
    sessionStorage.setItem("cart", JSON.stringify(cart));

    navigate("/orderplaced");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Enter Your Shipping Address</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          className="form-control mb-2"
          placeholder="Full Name"
          value={address.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          className="form-control mb-2"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="street"
          className="form-control mb-2"
          placeholder="Street Address"
          value={address.street}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          className="form-control mb-2"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          className="form-control mb-3"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success w-100">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Address;
