import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = { 
    brand : "",
    model : "",
    price : 0, 
}

export const getProductInfo = createAsyncThunk(
  'phone/getProduct',
  async (prodId, thunkAPI) => {
    console.log(prodId);
    const {data} = await axios.get(`http://localhost:8000/Phone/${prodId}`)
    return data;
  }
)

 const phoneReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getProductInfo.fulfilled, (state, action) => {
        console.log("brand is = "+action.payload.brand);
        console.log("model is = "+action.payload.model);
        console.log("price is = "+action.payload.price);

        state.brand = action.payload.brand;
        state.model = action.payload.model;
        state.price = action.payload.price;
        state.pending = false;
  })
})

export default phoneReducer;