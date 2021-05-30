import { Fragment } from "react";

import DUMMY_MEALS from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <Fragment>
      <div className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </div>
    </Fragment>
  );
};

export default AvailableMeals;
