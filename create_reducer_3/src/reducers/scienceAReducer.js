import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('scienceA/increment')
const decrement = createAction('scienceA/decrement')
const incrementByAmount = createAction('scienceA/incrementByAmount')

const initialState = { 
    physics : 0, 
}

const scienceAReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.physics++;
    })
    .addCase(decrement, (state, action) => {
      state.physics--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.physics += action.payload;
    })
})

export {increment, decrement, incrementByAmount}
export default scienceAReducer