import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basic: 25000,
    HRA: 6500,
    TA: 8500,
}

const AddSalarySlice = createSlice({
    name: 'AddSalary',
    initialState,
    reducers: {
        increment(state) {
            state.basic += 1500;
            state.HRA += 100;
            state.TA += 50;
        },
        decrement(state) {
            if (state.basic > 5000 && state.HRA > 2000 && state.TA > 3000) {
                state.basic -= 1500;
                state.HRA -= 100;
                state.TA -= 50;
            }
        },
        incrementByAmount(state, action) {
            state.basic +=  action.payload;
            state.HRA +=  action.payload;
            state.TA +=  action.payload;
        },
    },
})

export const { increment, decrement, incrementByAmount } = AddSalarySlice.actions
export default AddSalarySlice.reducer