import { useRef, useState } from "react";

import classes from "./MealsItemForm.module.css";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);

  const submitAmountHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmount(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitAmountHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.meal.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
        ref={amountInputRef}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please enter valid amount!</p>}
    </form>
  );
};

export default MealsItemForm;
