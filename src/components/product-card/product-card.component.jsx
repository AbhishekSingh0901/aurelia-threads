import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <button className="cart-button">ADD TO CART</button>
    </div>
  );
};
export default ProductCard;
