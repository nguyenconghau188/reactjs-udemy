import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const CART_ITEMS = [
  {
    id: "m1",
    name: "Sushi",
    amount: 3,
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    amount: 2,
    price: 16.5,
  },
];

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CART_ITEMS.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>$35.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
