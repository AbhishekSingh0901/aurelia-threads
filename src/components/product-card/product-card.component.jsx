import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <button onClick={addProductToCart} className="cart-button">
        +
      </button>
    </div>
  );
};
export default ProductCard;
