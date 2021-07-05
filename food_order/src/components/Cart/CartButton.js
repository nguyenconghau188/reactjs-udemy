import { useContext } from "react";

import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
