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
  else if(action.type === "EMPTY_ORDER"){
     return state = []
  }
  else if(action.type === "REMOVE_FOR_CART"){
    return state.filter( order => order.id !== action.payload )
  }

  return state;
};

// Customer Info reducer
const custoInfoReducer = (state = [], action) => {
  if (action.type === "SET_CUSTOMER_INFO") {
    return action.payload;
  } 
  else if(action.type === "EMPTY_ORDER"){
    return state = []
 }
  return state;
};

const primePizzaOrders = (state = [], action) => {
  if (action.type === "SET_PRIME_PIZZA_ORDERS") {
    return action.payload;
  }
  else if(action.type === "EMPTY_ORDER"){
    return state = []
 }

  return state;
};

const cartPriceReducer = (state = 0, action) => {
  if (action.type === "SET_CART_PRICE") {
    return action.payload;
  }
  else if(action.type === "EMPTY_ORDER"){
    return state = 0
 }


  return state;
}

const storePizza = createStore(
  combineReducers({
    pizzaGalleryList,
    primePizzaOrders,
    cartReducer,
    custoInfoReducer,

    cartPriceReducer

  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storePizza}>
    <App />
  </Provider>,
  document.getElementById("root")
);
