import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Science from "./Component/Science"
import Arts from './Component/Arts';
import { useEffect, useState } from 'react';

function App() {
  const [sc_total, setSc_Total] = useState(0); 
  const [art_total, setArt_Total] = useState(0);  
  const [total, setTotal] = useState(0);

  const physics = useSelector(state => state.science.physics);
  const chemsitry = useSelector(state => state.science.chemsitry);
  const mathematics = useSelector(state => state.science.mathematics);

  const history = useSelector(state => state.arts.history);
  const geography = useSelector(state => state.arts.geography);
  const philosophy = useSelector(state => state.arts.philosophy);

  useEffect(() => {
        setSc_Total(physics + chemsitry + mathematics);
        setArt_Total(history + geography + philosophy);
        setTotal(physics + chemsitry + mathematics + history + geography + philosophy)
  },[physics, chemsitry, mathematics, history, geography, philosophy])
  return (
    <div className="App">
      <h2>redux-toolkit 1 is executing.....</h2>
      <h3>App Component</h3>
      <h4>marks in physics is : {physics}</h4>
      <h4>marks in chemsitry is : {chemsitry}</h4>
      <h4>marks in mathematics is : {mathematics}</h4>

      <h4>marks in history : {history}</h4>
      <h4>marks in geography : {geography}</h4>
      <h4>marks in philosophy : {philosophy}</h4>

      <h4>science total : {sc_total}</h4>
      <h4>arts total : {art_total}</h4>
      <h4>total in all subjects : {total}</h4>
      <Science />
      <Arts />
    </div>
  );
}

export default App;
