import { Star } from "@material-ui/icons";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="card" key={product.id}>
      <div className="container">
        <img className="productImage" src={product.imgSrc} alt="" />
      </div>
      <h3>{product.brand}</h3>
      <p>{product.title}</p>
      <section className="rating">
        Rating: {product.rating}
        <Star id="star" />
      </section>
      <p>Price: Rs {product.price}</p>
    </div>
  );
};
