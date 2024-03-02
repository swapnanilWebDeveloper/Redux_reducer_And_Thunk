import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('science/increment')
const decrement = createAction('science/decrement')
const incrementByAmount = createAction('science/incrementByAmount')

const initialState = {
     physics : 35,
     chemsitry : 35,
     mathematics : 35, 
    }

const scienceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
        if(state.physics < 100 && state.chemsitry < 100 && state.mathematics < 100){
            state.physics++;
            state.chemsitry++;
            state.mathematics++;
        }
        else{
            alert("marks in an individual(science) subject should not be greater than 100!!")
        }
    })
    .addCase(decrement, (state, action) => {
        if(state.physics > 35 && state.chemsitry > 35 && state.mathematics > 35){
            state.physics--;
            state.chemsitry--;
            state.mathematics--;
        }
        else{
            alert("marks in an individual(science) subject should not be lesser than 35!!")
        }
    })
    .addCase(incrementByAmount, (state, action) => {
        if(state.physics + action.payload <= 100){
            state.physics += action.payload;
            state.chemsitry += action.payload;
            state.mathematics += action.payload;
        }  
        else{
            alert("marks in an individual(science) subject should not be greater than 100!!")
        }
    })
})

export default scienceReducer;
export {increment, decrement, incrementByAmount}