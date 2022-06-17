import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { Router } from "react-router-dom";

// --- Reducers ---
// Gallery reducer
const pizzaGalleryList = (state = [], action) => {
  if (action.type === "SET_PIZZA_GALLERY") {
    //returning the payload of the data 
    return action.payload;
  }
  return state;
};
// //Cart reducer
const cartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  }
  else if(action.type === "DELETE_FROM_CART"){
    
  }

  return state;
};
// Customer Info reducer
const custoInfoReducer = (state = [], action) => {
  if (action.type === "SET_CUSTOMER_INFO") {
    return action.payload;
  }
  return state;
};

const primePizzaOrders = (state = [], action) => {
  if (action.type === "SET_PRIME_PIZZA_ORDERS") {
    return action.payload;
  }
  return state;
};

const storePizza = createStore(
  combineReducers({
    pizzaGalleryList,
    primePizzaOrders,
    cartReducer,
    custoInfoReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storePizza}>
    <App />
  </Provider>,
  document.getElementById("root")
);
