import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";

const controles = [
  { type: "meat", label: "Meat" },
  { type: "bacon", label: "Bacon" },
  { type: "cheese", label: "Cheese" },
  { type: "salad", label: "Salad" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Total price: $<strong>{props.total.toFixed(2)}</strong>
      </p>
      {controles.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.type}
            label={ctrl.label}
            addIngredient={() => props.added(ctrl.type)}
            removeIngredient={() => props.removed(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.disabledOrderBtn}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildControls;
