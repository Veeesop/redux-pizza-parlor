import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// --- Reducers ---
// Gallery reducer
const pizzaGalleryList = (state = [], action) => {
  if (action.type === "SET_PIZZA_GALLERY") {
    return action.payload;
  }
  return state;
};
// //Cart reducer
const cartReducer = (state = [], action) => {
  
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
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

const storePizza = createStore(
  combineReducers({
    pizzaGalleryList,
    cartReducer
    // custoInfoReducer,
  }),
  applyMiddleware(logger)

);

ReactDOM.render(
  <Provider store={storePizza}>
    <App />
  </Provider>,
  document.getElementById("root")
);
