import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const initialState = {
    amount : 10,
    pending : false,
    error : "something went wrong while fetching the data....!!!",
}

export const getUserAccount = createAsyncThunk(
  'account/getUser',
  async (userId, thunkAPI) => {
    const {data} = await axios.get(`http://localhost:4000/accounts/${userId}`)
    return data.amount;
  }
)

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
  extraReducers : (builder) => {
      builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
            console.log("action is = "+action);
            console.log("amount is = "+action.payload);
            state.amount = action.payload;
            state.pending = false;
      })
     .addCase(getUserAccount.pending, (state, action) => {
        state.amount = action.payload;
        state.pending = true;
     })
     .addCase(getUserAccount.rejected, (state, action) => {
      state.error = action.error;
    })  
  }
})

export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer