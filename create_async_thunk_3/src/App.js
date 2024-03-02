import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Laptop from './Component/Laptop';
import Phone from './Component/Phone';
import { useState } from 'react';

function App() {
  const company = useSelector(state => state.laptop.company);
  const rating = useSelector(state => state.laptop.rating);
  const stock = useSelector(state => state.laptop.stock);

  const brand = useSelector(state => state.phone.brand);
  const model = useSelector(state => state.phone.model);
  const price = useSelector(state => state.phone.price);

  return (
    <div className="App">
      <h2>redux-toolkit 1 is executing.....</h2>
      <h3>App Component</h3>
      <h3>laptop company is : {company}</h3>
      <h3>laptop rating is : {rating}</h3>
      <h3>laptop stock is : {stock}</h3>

      <h4>phone brand is : {brand}</h4>
      <h4>phone model is : {model}</h4>
      <h4>phone price is : {price}</h4>
      
      <Laptop />
      <Phone />
    </div>
  );
}

export default App;
