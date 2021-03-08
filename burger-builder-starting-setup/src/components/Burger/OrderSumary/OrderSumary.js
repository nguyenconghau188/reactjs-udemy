import React from "react";

import Aux from "../../../hoc/Auxiliaries";
import Button from "../../UI/Button/Button";

const orderSumary = (props) => {
  const ingredientsInfo = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsInfo}</ul>
      <p>
        <strong>Total Price: ${props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.modalClosed}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continuePurchased}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSumary;
