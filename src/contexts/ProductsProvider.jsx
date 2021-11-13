import React, { useReducer, createContext } from "react";
import axios from "axios";

const initialState = {
  products: null,
  isLoading: false,
  isLoaded: false
};

export const ProductsContext = createContext();

const reducer = (state, action) => {
  console.log("Pinned dispatched", action)
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        products: action.payload.products
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        products: null,
        isLoading: false,
        isLoaded: false
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
        {children}
    </ProductsContext.Provider>
  );
};

export const getProducts = (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_REQUEST"
  });
  axios
    .get("./data.json")
    .then((response) => {
      dispatch({
        type: "GET_PRODUCTS_SUCCESS",
        payload: {
          products: response.data
        }
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: "GET_PRODUCTS_FAILURE"
      });
    });
};

export default ProductsProvider;