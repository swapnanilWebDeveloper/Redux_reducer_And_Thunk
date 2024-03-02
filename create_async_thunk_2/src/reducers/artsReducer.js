import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = { 
    history : 0,
    geography : 0,
    philosophy : 0, 
}

export const getStudentData = createAsyncThunk(
  'arts_subjects/getStudent',
  async (userId, thunkAPI) => {
    console.log(userId);
    const {data} = await axios.get(`http://localhost:4000/arts_subjects/${userId}`)
    return data;
  }
)

 const artsReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getStudentData.fulfilled, (state, action) => {
        console.log("history is = "+action.payload.history);
        console.log("geography is = "+action.payload.geography);
        console.log("philosophy is = "+action.payload.philosophy);

        state.history = action.payload.history;
        state.geography = action.payload.geography;
        state.philosophy = action.payload.philosophy;
        state.pending = false;
  })
})

export default artsReducer;