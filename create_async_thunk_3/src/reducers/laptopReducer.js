import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = { 
    company : "",
    rating : 0,
    stock : 0,
}

export const fetchProductData = createAsyncThunk(
  'laptop/fetchProduct',
  async (userId, thunkAPI) => {
    console.log(userId);
    const {data} = await axios.get(`http://localhost:8000/laptop/${userId}`)
    return data;
  }
)

 const laptopReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(fetchProductData.fulfilled, (state, action) => {
        console.log("company is = "+action.payload.company);
        console.log("rating is = "+action.payload.rating);
        console.log("stock is = "+action.payload.stock);

        state.company = action.payload.company;
        state.rating = action.payload.rating;
        state.stock = action.payload.stock;
        state.pending = false;
  })
})

export default laptopReducer;