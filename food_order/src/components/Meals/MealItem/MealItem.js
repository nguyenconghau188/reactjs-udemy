import classes from "./MealItem.module.css";
import MealsItemForm from "../MealsItemForm";

const MealItem = (props) => {
  const price = `$${props.meal.price}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm meal={props.meal} />
      </div>
    </li>
  );
};

export default MealItem;
