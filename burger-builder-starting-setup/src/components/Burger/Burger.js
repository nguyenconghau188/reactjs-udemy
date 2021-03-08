import React from "react";

import classes from "./Burger.css";
import BurgerIngrendient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngrendient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, elm) => {
      return arr.concat(elm);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrendient type="bread-top" />
      {transformedIngredients}
      <BurgerIngrendient type="bread-bottom" />
    </div>
  );
};

export default burger;
