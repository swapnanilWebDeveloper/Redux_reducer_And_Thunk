import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('scienceB/increment')
const decrement = createAction('scienceB/decrement')
const incrementByAmount = createAction('scienceB/incrementByAmount')

const initialState = { 
    chemistry : 0, 
}

const scienceBReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.chemistry++;
    })
    .addCase(decrement, (state, action) => {
      state.chemistry--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.chemistry += action.payload;
    })
})

export {increment, decrement, incrementByAmount};
export default scienceBReducer