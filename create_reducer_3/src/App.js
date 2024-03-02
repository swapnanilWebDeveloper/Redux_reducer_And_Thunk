import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import ScienceA from './Component/ScienceA';
import ScienceB from './Component/ScienceB';
import ScienceC from './Component/ScienceC';
import { useEffect, useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);

  const physics = useSelector(state => state.scienceA.physics);
  const chemistry = useSelector(state => state.scienceB.chemistry);
  const mathematics = useSelector(state => state.scienceC.mathematics);

  useEffect(() => {
      setTotal(physics + chemistry + mathematics);
  },[physics, chemistry, mathematics])

  return (
    <div className="App">
       <h2>redux-toolkit 1 is executing.....</h2>
       <h3>App Component</h3>
       <h4>marks in physics is : {physics}</h4>
       <h4>marks in chemistry is : {chemistry}</h4>
       <h4>marks in mathematics is : {mathematics}</h4>

       <h3>Total marks in science : {total}</h3>
       <ScienceA />
       <ScienceB />
       <ScienceC />
    </div>
  );
}

export default App;
