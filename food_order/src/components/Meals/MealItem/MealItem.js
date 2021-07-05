import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealsItemForm from "../MealsItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.meal.price}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm meal={props.meal} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
