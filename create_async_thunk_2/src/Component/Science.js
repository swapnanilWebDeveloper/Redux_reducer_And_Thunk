import React,{useState} from 'react'
import {fetchStudentInfo} from "../reducers/scienceReducer"
import { useDispatch, useSelector } from 'react-redux'

function Science(){
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const physics = useSelector(state => state.science.physics);
    const chemistry = useSelector(state => state.science.chemistry);
    const mathematics = useSelector(state => state.science.mathematics);

    const next_student = () => {
        if(num < 6){
            setNum(num + 1);
            dispatch(fetchStudentInfo(num+1));
        }
        else{
            alert("No next student is available...!!");
        }
    }

    const previous_student = () => {
        if(num > 1){
            setNum(num - 1);
            dispatch(fetchStudentInfo(num - 1));
        }
        else{
            alert("No previous student is available...!!");
        }
    }
  return (
    <div className="card">
        <h3>science component...</h3> 
    
        <h3>marks in physics : {physics}</h3>
        <h3>marks in chemistry : {chemistry}</h3>
        <h3>marks in mathematics : {mathematics}</h3>
       
        <button onClick={() => next_student()}>Next Candidate +</button>
        <button onClick={() => previous_student()}>Previous Candidate -</button> 

       <input type="text" onChange={(e) => setNum(Number(e.target.value))}/>
       <button onClick={() => dispatch(fetchStudentInfo(num))}>Chose id : {num}</button>
    </div>
  )
}

export default Science

