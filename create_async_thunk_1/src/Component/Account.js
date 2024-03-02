import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, getUserAccount} from '../slices/AccountSlice';

function Account() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const amount = useSelector(state => state.account.amount);

  return (
    <div className="card">
        <h3>Account component...</h3> 
        
        <h3>Total amount : {amount}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment By Amount</button>
        <button onClick={() => dispatch(getUserAccount(1))}>get user</button>
    </div>
  )
}

export default Account
