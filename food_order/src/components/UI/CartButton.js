import { Fragment } from "react";

import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const CartButton = (props) => {
  return (
    <Fragment>
      <div className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </div>
    </Fragment>
  );
};

export default CartButton;
