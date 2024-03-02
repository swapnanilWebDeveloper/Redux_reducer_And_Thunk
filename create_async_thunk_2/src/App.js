import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Science from './Component/Science';
import Arts from './Component/Arts';
import { useEffect, useState } from 'react';

function App() {
  const [total_sc, setTotal_sc] = useState(0);
  const [total_arts, setTotal_arts] = useState(0);

  const physics = useSelector(state => state.science.physics);
  const chemistry = useSelector(state => state.science.chemistry);
  const mathematics = useSelector(state => state.science.mathematics);
  const name = useSelector(state => state.science.name);
  const address = useSelector(state => state.science.address);

  const history = useSelector(state => state.arts.history);
  const geography = useSelector(state => state.arts.geography);
  const philosophy = useSelector(state => state.arts.philosophy);

  useEffect(() => {
    setTotal_sc(physics + chemistry + mathematics);
  }, [physics, chemistry, mathematics])

  useEffect(() => {
    setTotal_arts(history + geography + philosophy);
  }, [history, geography, philosophy])

  return (
    <div className="App">
      <h2>redux-toolkit 1 is executing.....</h2>
      <h3>App Component</h3>
      <h3>Name is : {name}</h3>
      <h3>address is : {address}</h3>
      <h4>marks in physics is : {physics}</h4>
      <h4>marks in chemistry is : {chemistry}</h4>
      <h4>marks in mathematics is : {mathematics}</h4>
      <h3>marks in history : {history}</h3>
      <h3>marks in geography : {geography}</h3>
      <h3>marks in philosophy : {philosophy}</h3>

      <h3>Total marks in science : {total_sc}</h3>
      <h3>Total marks in arts : {total_arts}</h3>
      <Science />
      <Arts />
    </div>
  );
}

export default App;
