import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm'

//PizzaGallery
import PizzaGallery from '../PizzaGallery/PizzaGallery';


function App() {
  const dispatch = useDispatch();

useEffect(() => {
  fetchPizzas();
}, []);

const fetchPizzas = () => {
  axios({
    method: 'GET',
    url: '/api/pizza'
  }).then(response => {
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
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Router>
        <div>
          <Link to="/customerInfo">Home</Link>
          <Route exact path="/customerInfo">
            <CustomerForm />
          </Route>         
        </div>
      

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      
      </Router>

      <PizzaGallery/>
  
    </div>
  );
}

export default App;
