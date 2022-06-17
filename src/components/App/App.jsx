import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import CustomerForm from '../CustomerForm/CustomerForm';
import Header from '../Header/Header';

import Checkout from '../Checkout/Checkout';
import AdminOrder from '../AdminOrder/AdminOrder';
import Thankyou from '../Thankyou/Thankyou';


//PizzaGallery
import PizzaGallery from '../PizzaGallery/PizzaGallery';


function App() {
  const dispatch = useDispatch();

//on page load we execute fetchPizzas function  
useEffect(() => {
  fetchPizzas();
}, []);

//grabs the pizza data from database 
const fetchPizzas = () => {
  //we go to pizza router 
  axios({
    method: 'GET',
    url: '/api/pizza'
  }).then(response => {
    // we take the pizza data and dispatch it to the pizzaGalleryList reducer
    dispatch({
      type: 'SET_PIZZA_GALLERY',
      payload: response.data,
    });
  }).catch((err) => {
    console.error('GET /api/pizza failed', err)
  })
}

  return (
    <div className='App'>
      <Header />
      <Router>
      
       {/* //welcome */}
        <Route exact path='/'>
          <img className='pizzaPic' src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
          <PizzaGallery/>
        </Route>
        

        <Route exact path="/customerInfo">
          <CustomerForm />
        </Route>

        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route exact path="/adminOrder">
          <AdminOrder />
        </Route>

        <Route exact path="/thankYou">
          <Thankyou />
        </Route>

      </Router>
  


    </div>
  );
}

export default App;
