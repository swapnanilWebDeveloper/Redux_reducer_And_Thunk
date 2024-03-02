import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')

const initialState = {
    reward_points : 25,
    reward_pf : 1250,
  }

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.reward_points++;
      state.reward_pf += 250; 
    })
    .addCase(incrementByAmount, (state, action) => {
        state.reward_points += action.payload;
      })
})

export default rewardReducer