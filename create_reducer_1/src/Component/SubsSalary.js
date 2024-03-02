import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../slices/SubsSalarySlice';

function SubsSalary() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const PF = useSelector(state => state.SubsSalary.PF);
    const IT = useSelector(state => state.SubsSalary.IT);

  return (
    <div className="card">
        <h3>Account component...</h3> 
        
        <h3>Provident Fund is : {PF}</h3>
        <h3>Income Tax is : {IT}</h3>
        
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment By Amount</button>
    </div>
  )
}

export default SubsSalary;
