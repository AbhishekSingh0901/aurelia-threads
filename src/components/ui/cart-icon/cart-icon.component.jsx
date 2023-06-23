import { useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";
import { ReactComponent as ShopiingIcon } from "../../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const onCartClickHandeler = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={onCartClickHandeler} className="cart-icon-container">
      <ShopiingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
