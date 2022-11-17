import { CartItemCantainer, ItemDetails } from "./card-item.styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemCantainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemCantainer>
  );
};

export default CartItem;
