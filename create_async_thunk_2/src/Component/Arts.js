import React,{useState} from 'react'
import {getStudentData} from "../reducers/artsReducer"
import { useDispatch, useSelector } from 'react-redux'

function Arts(){
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const history = useSelector(state => state.arts.history);
    const geography = useSelector(state => state.arts.geography);
    const philosophy = useSelector(state => state.arts.philosophy);

    const next_student = () => {
        if(num < 6){
            setNum(num + 1);
            dispatch(getStudentData(num+1));
        }
        else{
            alert("No next student is available...!!");
        }
    }

    const previous_student = () => {
        if(num > 1){
            setNum(num - 1);
            dispatch(getStudentData(num - 1));
        }
        else{
            alert("No previous student is available...!!");
        }
    }
  return (
    <div className="card">
        <h3>Arts component...</h3> 
    
        <h3>marks in history : {history}</h3>
        <h3>marks in geography : {geography}</h3>
        <h3>marks in philosophy : {philosophy}</h3>
       
        <button onClick={() => next_student()}>Next Candidate +</button>
        <button onClick={() => previous_student()}>Previous Candidate -</button> 

       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(getStudentData(num))}>Chose id : {num}</button>
    </div>
  )
}

export default Arts

