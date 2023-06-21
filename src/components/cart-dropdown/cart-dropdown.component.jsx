import Button from "../ui/sign-button/sign.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartDropdown;
