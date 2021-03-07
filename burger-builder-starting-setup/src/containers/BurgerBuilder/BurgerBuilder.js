import React, { Component } from "react";

import Aux from "../../hoc/Auxiliaries";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGEDIENTS_PRICES = {
  salad: 0.4,
  bacon: 0.6,
  cheese: 0.7,
  meat: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 2,
    purchaseable: false,
  };

  addedIngredientHandler = (type) => {
    let ingredientsInfo = { ...this.state.ingredients };
    ingredientsInfo[type] += 1;
    let totalPriceInfo = this.state.totalPrice;
    totalPriceInfo += INGEDIENTS_PRICES[type];
    this.setState(
      {
        ingredients: ingredientsInfo,
        totalPrice: totalPriceInfo,
      },
      () => this.updatePurchaseableState()
    );
  };

  removedIngredientHandler = (type) => {
    let ingredientsInfo = { ...this.state.ingredients };
    if (ingredientsInfo[type] <= 0) {
      return;
    }
    ingredientsInfo[type] -= 1;
    let totalPriceInfo = this.state.totalPrice;
    totalPriceInfo -= INGEDIENTS_PRICES[type];
    this.setState(
      {
        ingredients: ingredientsInfo,
        totalPrice: totalPriceInfo,
      },
      () => this.updatePurchaseableState()
    );
  };

  updatePurchaseableState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, igNum) => {
        return sum + igNum;
      }, 0);
    this.setState({
      purchaseable: sum > 0,
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = this.state.ingredients[key] <= 0 ? true : false;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          total={this.state.totalPrice}
          added={this.addedIngredientHandler}
          removed={this.removedIngredientHandler}
          disabled={disabledInfo}
          disabledOrderBtn={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
