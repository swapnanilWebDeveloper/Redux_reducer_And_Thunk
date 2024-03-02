import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = { 
    physics : 0,
    chemistry : 0,
    mathematics : 0, 
    name : "",
    address : "",  
}

export const fetchStudentInfo = createAsyncThunk(
  'science_subjects/fetchStudent',
  async (userId, thunkAPI) => {
    console.log(userId);
    const {data} = await axios.get(`http://localhost:4000/science_subjects/${userId}`)
    /* const {product_info} = await axios.get(`http://localhost:4000/laptop/${userId}`)
    console.log("product processor = "+product_info.processor);
    console.log("product generation = "+product_info.generation);  */
    return data;
  }
)

 const scienceReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(fetchStudentInfo.fulfilled, (state, action) => {
        console.log("physics is = "+action.payload.physics);
        console.log("Chemistry is = "+action.payload.chemistry);
        console.log("mathematics is = "+action.payload.mathematics);

        state.name = action.payload.name;
        state.address = action.payload.address;
        state.physics = action.payload.physics;
        state.chemistry = action.payload.chemistry;
        state.mathematics = action.payload.mathematics;
        state.pending = false;
  })
 /* .addCase(fetchStudentInfo.pending, (state, action) => {
    state.physics = action.payload.physics;
    state.chemistry = action.payload.chemistry;
    state.chemistry = action.payload.chemistry;
    state.pending = true;
 }) */
})

export default scienceReducer;