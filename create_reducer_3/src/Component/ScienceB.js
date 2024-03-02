import React,{useState} from 'react'
import { increment,decrement,incrementByAmount } from "../reducers/scienceBReducer"
import { useDispatch, useSelector } from 'react-redux'

function ScienceB() {
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const chemistry = useSelector(state => state.scienceB.chemistry);
    
  return (
    <div className="card">
        <h3>CHEMISTRY component...</h3> 
        
        <h3>Marks in chemistry : {chemistry}</h3>
       
       <button onClick={() => dispatch(increment())}>Increment +</button>
       <button onClick={() => dispatch(decrement())}>Decrement -</button>
       
       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(incrementByAmount(num))}>Increment By {num}</button>
    </div>
  )
}

export default ScienceB

