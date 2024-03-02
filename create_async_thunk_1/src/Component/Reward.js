import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,incrementByAmount } from '../reducers/rewardReducer';

function Reward() {
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const reward_points = useSelector(state => state.reward.reward_points);
    const reward_pf = useSelector(state => state.reward.reward_pf);

  return (
    <div className="card">
        <h3>Reward component...</h3> 
        
        <h3>reward point ends here : {reward_points}</h3>
        <h3>reward provident fund : {reward_pf}</h3>
       <button onClick={() => dispatch(increment())}>Increment +</button>
       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(incrementByAmount(num))}>Increment By {num}</button>
    </div>
  )
}

export default Reward
