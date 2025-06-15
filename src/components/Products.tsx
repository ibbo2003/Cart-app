import { useCart } from "../contexts/CartContext";
import ProductCard from "./ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "iPhone 14",
    img: "https://picsum.photos/150",
    price: 999,
    desc: "The latest Apple smartphone with amazing features.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    img: "https://picsum.photos/150",
    price: 899,
    desc: "High-end Android phone with excellent performance.",
  },
  {
    id: 3,
    name: "Google Pixel 7",
    img: "https://picsum.photos/150",
    price: 799,
    desc: "Google's flagship phone with stock Android experience.",
  },
];

const Products = () => {
  const { addItem } = useCart();

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {dummyProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              {...product}
              img={product.img}
              price={product.price}
              name={product.name}
              desc={product.desc}
              id={product.id}
              onClickAdd={() => addItem(product)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
