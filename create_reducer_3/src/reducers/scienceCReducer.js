import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('scienceC/increment')
const decrement = createAction('scienceC/decrement')
const incrementByAmount = createAction('scienceC/incrementByAmount')

const initialState = { 
    mathematics : 0 
}

const scienceCReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.mathematics++;
    })
    .addCase(decrement, (state, action) => {
      state.mathematics--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.mathematics += action.payload
    })
})

export {increment, decrement, incrementByAmount}
export default scienceCReducer;