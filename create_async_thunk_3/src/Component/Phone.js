import React,{useState} from 'react'
import { getProductInfo } from "../reducers/phoneReducer";
import { useDispatch, useSelector } from 'react-redux'

function Phone(){
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const brand = useSelector(state => state.phone.brand);
    const model = useSelector(state => state.phone.model);
    const price = useSelector(state => state.phone.price);

    const next_phone = () => {
        if(num < 6){
            setNum(num + 1);
            dispatch(getProductInfo(num+1));
        }
        else{
            alert("No next phone is available...!!");
        }
    }

    const previous_phone = () => {
        if(num > 1){
            setNum(num - 1);
            dispatch(getProductInfo(num - 1));
        }
        else{
            alert("No previous phone is available...!!");
        }
    }
  return (
    <div className="card">
        <h3>science component...</h3> 
    
        <h3>brand : {brand}</h3>
        <h3>model : {model}</h3>
        <h3>price : {price}</h3>
       
        <button onClick={() => next_phone()}>Next phone +</button>
        <button onClick={() => previous_phone()}>Previous phone -</button> 

       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(getProductInfo(num))}>Chose id : {num}</button>
    </div>
  )
}

export default Phone

