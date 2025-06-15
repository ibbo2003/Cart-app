

type cardprop = {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
  onClickAdd?: () => void; 
};

const ProductCard = (props: cardprop) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.desc}</p>

        <button
          className="btn btn-primary"
          onClick={props.onClickAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
