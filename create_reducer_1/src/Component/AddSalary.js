import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/AddSalarySlice';

function AddSalary() {
    const [value, setValue] = useState(0);
    const [plusSal, setPlusSal] = useState(0);

    const dispatch = useDispatch();
    const basic = useSelector(state => state.AddSalary.basic);
    const HRA = useSelector(state => state.AddSalary.HRA);
    const TA = useSelector(state => state.AddSalary.TA);

    useEffect(() => {
        setPlusSal(basic + HRA + TA);
    },[basic,HRA,TA]);
  return (
    <div className="card">
        <h3>Account component...</h3> 
        
        <h3>Basic Salary : {basic}</h3>
        <h3>HRA Salary : {HRA}</h3>
        <h3>TA Salary : {TA}</h3>
        <h3>Plus Salary : {plusSal}</h3>

        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment By Amount</button>
    </div>
  )
}

export default AddSalary;
