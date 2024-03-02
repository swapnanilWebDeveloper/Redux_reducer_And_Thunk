import React,{useState} from 'react'
import { increment ,decrement, incrementByAmount } from "../reducers/scienceAReducer"
import { useDispatch, useSelector } from 'react-redux'

function ScienceA() {
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const physics = useSelector(state => state.scienceA.physics);
    
  return (
    <div className="card">
        <h3>physics component...</h3> 
        
        <h3>marks in physics : {physics}</h3>
       
       <button onClick={() => dispatch(increment())}>Increment +</button>
       <button onClick={() => dispatch(decrement())}>Decrement -</button>

       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(incrementByAmount(num))}>Increment By {num}</button>
    </div>
  )
}

export default ScienceA

