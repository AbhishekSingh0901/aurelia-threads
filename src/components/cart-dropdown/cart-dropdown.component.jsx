import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const onCheckoutClickHandeler = () => setIsCartOpen(false);
  const goToCheckoutHandeler = () => {
    navigate("/checkout");
  };

  const onClickHandler = () => {
    onCheckoutClickHandeler();
    goToCheckoutHandeler();
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button onClick={onClickHandler} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
