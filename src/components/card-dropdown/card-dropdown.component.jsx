import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CardItem from "../card-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CardItem key={cartItem.id} cardItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
