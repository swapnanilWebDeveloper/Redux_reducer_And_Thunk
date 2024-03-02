import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

function Bonus() {
    const dispatch = useDispatch();
    const points = useSelector(state => state.bonus.points);

  return (
    <div className="card">
        <h3>Bonus component...</h3> 
        
        <h3>Total point : {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
    </div>
  )
}

export default Bonus
