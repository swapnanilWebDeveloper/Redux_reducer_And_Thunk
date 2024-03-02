import React,{useState} from 'react'
import {fetchProductData} from "../reducers/laptopReducer"
import { useDispatch, useSelector } from 'react-redux'

function Laptop(){
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const company = useSelector(state => state.laptop.company);
    const rating = useSelector(state => state.laptop.rating);
    const stock = useSelector(state => state.laptop.stock);

    const next_laptop = () => {
        if(num < 6){
            setNum(num + 1);
            dispatch(fetchProductData(num+1));
        }
        else{
            alert("No next laptop is available...!!");
        }
    }

    const previous_laptop = () => {
        if(num > 1){
            setNum(num - 1);
            dispatch(fetchProductData(num - 1));
        }
        else{
            alert("No previous laptop is available...!!");
        }
    }
  return (
    <div className="card">
        <h3>laptop component...</h3> 
    
        <h3>company : {company}</h3>
        <h3>rating : {rating}</h3>
        <h3>stock : {stock} Rs /-</h3>
       
        <button onClick={() => next_laptop()}>Next laptop +</button>
        <button onClick={() => previous_laptop()}>Previous laptop -</button> 

       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(fetchProductData(num))}>Chose id : {num}</button>
    </div>
  )
}

export default Laptop

