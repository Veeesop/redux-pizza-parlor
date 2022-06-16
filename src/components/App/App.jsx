import React from 'react';
import axios from 'axios';
import './App.css';

//PizzaGallery
import PizzaGallery from '../PizzaGallery/PizzaGallery';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaGallery/>
  
    </div>
  );
}

export default App;
