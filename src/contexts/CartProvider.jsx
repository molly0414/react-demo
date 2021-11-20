import React, { useReducer, createContext, useEffect } from "react";
import useLocalStorage from "hook/useLocalStorage";

const initialState = {
  items: [],
};

export const CartContext = createContext();

const reducer = (state, action) => {
  console.log("Pinned dispatched: ", action);
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const id = action.payload.newItem.id;
      const isOld = state.items.map((item) => item.id).includes(id);
      let cartItems = null;

      if (isOld) {
        const items = state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.newItem.quantity,
            };
          }
          return item;
        });
        cartItems = items;
      } else {
        cartItems = [...state.items, action.payload.newItem];
      }
      return {
        items: cartItems,
      };
    case "CHANGE_COUNT":
      const items = state.items.map((item) => {
          if (item.id === action.payload.changeItemId) {
            return {
              ...item,
              quantity: action.payload.newQuantity,
            };
          }
          return item;
        });
      return {
        items: items
      };
    case "REMOVE_FROM_CART":
      return {
        items: state.items.filter((item) => item.id !== action.payload.removeItemId),
      };
    case "CLEAR_CART":
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const CartProvider = ({ children }) => {
  const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
    "cartItems",
    []
  );
  const persistedCartState = {
    items: persistedCartItems || [],
  };
  const [state, dispatch] = useReducer(reducer, persistedCartState);
  const itemJsonString = JSON.stringify(state.items);
  useEffect(() => {
    setPersistedCartItems(state.items);
  }, [setPersistedCartItems, state.items, itemJsonString]);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const addToCart = (dispatch, item) => {
  return dispatch({
    type: "ADD_ITEM_TO_CART",
    payload: {
      newItem: item,
    },
  });
};

export const removeFromCart = (dispatch, itemId) => {
  return dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      removeItemId: itemId,
    },
  });
};

export const changeQuantity = (dispatch, itemId, quantity) => {
  return dispatch({
    type: "CHANGE_COUNT",
    payload: {
      changeItemId: itemId,
      newQuantity: quantity
    }
  })
} 

export const clearCart = (dispatch) => {
  return dispatch({
    type: "CLEAR_CART",
  });
};

export default CartProvider;
