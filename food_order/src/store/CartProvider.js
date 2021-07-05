import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedAddTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      let updatedAddItems;
      const existAddItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existAddItem = state.items[existAddItemIndex];
      if (existAddItem) {
        let updateItem = {
          ...existAddItem,
          amount: existAddItem.amount + action.item.amount,
        };
        updatedAddItems = [...state.items];
        updatedAddItems[existAddItemIndex] = updateItem;
      } else {
        updatedAddItems = state.items.concat(action.item);
      }
      return {
        items: updatedAddItems,
        totalAmount: updatedAddTotalAmount,
      };
    case "REMOVE_ITEM":
      const updatedRemoveTotalAmount = state.totalAmount - 1;
      const existRemoveItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      let updatedRemoveItems;
      const existRemoveItem = state.items[existRemoveItemIndex];
      if (existRemoveItem.amount > 1) {
        let removeItem = {
          ...existRemoveItem,
          amount: existAddItem.amount - 1,
        };
        updatedRemoveItems = [...state.items];
        updatedRemoveItems[existAddItemIndex] = removeItem;
      } else {
        updatedRemoveItems = state.items.filter(
          (item) => item.id !== action.id
        );
      }
      return {
        items: updatedRemoveItems,
        totalAmount: updatedRemoveTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
