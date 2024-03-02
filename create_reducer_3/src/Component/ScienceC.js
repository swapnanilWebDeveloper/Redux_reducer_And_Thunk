import React,{useState} from 'react'
import { increment, decrement, incrementByAmount} from "../reducers/scienceCReducer";
import { useDispatch, useSelector } from 'react-redux'

function ScienceC() {
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const  mathematics = useSelector(state => state.scienceC.mathematics);
    
  return (
    <div className="card">
        <h3>MATHEMATICS component...</h3> 
        
        <h3>Marks in mathematics : {mathematics}</h3>
       
       <button onClick={() => dispatch(increment())}>Increment +</button>
       <button onClick={() => dispatch(decrement())}>Decrement -</button>
       
       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(incrementByAmount(num))}>Increment By {num}</button>
    </div>
  )
}

export default ScienceC

