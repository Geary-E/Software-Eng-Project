import React from 'react';
import './App.css'
import ItemCard from './ItemCard';

const App = () => {
    return (
      <div className ='app'>
        <h1>Services</h1>
        
        <div className="container">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>

      </div>
    );
  }
   
export default App;