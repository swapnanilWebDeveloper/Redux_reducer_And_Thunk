import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../reducers/artsReducer';

function Arts() {
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const history = useSelector(state => state.arts.history);
    const geography = useSelector(state => state.arts.geography);
    const philosophy = useSelector(state => state.arts.philosophy);

  return (
    <div className="card">
        <h3>arts component...</h3> 
        
        <h3>marks in history : {history}</h3>
        <h3>marks in geography : {geography}</h3>
        <h3>marks in philosophy : {philosophy}</h3>
       <button onClick={() => dispatch(increment())}>Increment +</button>
       <button onClick={() => dispatch(decrement())}>Decrement -</button>
       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(incrementByAmount(num))}>Increment By {num}</button>
    </div>
  )
}

export default Arts
