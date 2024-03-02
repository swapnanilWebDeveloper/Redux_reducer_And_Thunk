import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
    PF: 4500,
    IT: 3500,
}

const incrementTax = createAction('AddSalary/incrementByAmount');

const SubsSalarySlice = createSlice({
    name: 'SubsSalary',
    initialState,
    reducers: {
        increment(state) {
            state.PF += 125;
            state.IT += 135;
        },
        decrement(state) {
            if (state.PF > 1500 && state.IT > 1200) {
                state.PF -= 125;
                state.IT -= 135;
            }
        },
        incrementByAmount(state, action) {
            state.PF += action.payload;
            state.IT += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementTax, (state, action) => {
            if (action.payload >= 10000) {
                console.log("Hello everyone...");
                state.PF += state.PF * (15 / 100);
                state.IT += state.IT * (15 / 100);
            }
        });
    }
})

export const { increment, decrement, incrementByAmount } = SubsSalarySlice.actions
export default SubsSalarySlice.reducer