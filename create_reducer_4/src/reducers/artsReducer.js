import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('arts/increment')
const decrement = createAction('arts/decrement')
const incrementByAmount = createAction('arts/incrementByAmount')

const initialState = { 
    history : 25,
    geography : 25,
    philosophy : 25,
}

const artsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
        if(state.history < 100 && state.geography < 100 && state.philosophy < 100){
            state.history++;
            state.geography++;
            state.philosophy++;
        }
        else{
            alert("marks in any individual(arts) subject should not br greater than 100..!!")
        }
    })
    .addCase(decrement, (state, action) => {
        if(state.history > 25 && state.geography > 25 && state.philosophy > 25){
            state.history--;
            state.geography--;
            state.philosophy--;
        }
        else{
            alert("marks in any individual(arts) subject should not br lesser than 25..!!")
        }
    })
    .addCase(incrementByAmount, (state, action) => {
        if(state.history + action.payload <= 100){
            state.history+= action.payload;
            state.geography+= action.payload;
            state.philosophy+= action.payload;
        }
        else{
            alert("marks in any individual(arts) subject should not br greater than 100..!!")
        }
    })
})

export default artsReducer
export {increment, decrement, incrementByAmount};