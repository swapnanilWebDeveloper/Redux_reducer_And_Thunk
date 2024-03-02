import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../reducers/scienceReducer';

function Science() {
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const physics = useSelector(state => state.science.physics);
    const chemsitry = useSelector(state => state.science.chemsitry);
    const mathematics = useSelector(state => state.science.mathematics);

  return (
    <div className="card">
        <h3>science component...</h3> 
        
        <h3>marks in physics : {physics}</h3>
        <h3>marks in chemsitry : {chemsitry}</h3>
        <h3>marks in mathematics : {mathematics}</h3>
       <button onClick={() => dispatch(increment())}>Increment +</button>
       <button onClick={() => dispatch(decrement())}>Decrement -</button>
       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(incrementByAmount(num))}>Increment By {num}</button>
    </div>
  )
}

export default Science
