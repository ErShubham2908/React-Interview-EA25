import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val : 0
}

const CounerSlice = createSlice({
    name : 'Counter',
    initialState,
    reducers : {
        add : (state, action) => {
            state.val = state.val + action.payload
        },
        sub : (state, action) => {
            state.val -= 1
        },
        multi : (state, action) => {
            state.val *= 2;
        },
        div : (state, action) => {
            state.val /= 2
        }
    }
})

// Action should be call in UI part
export const {add, sub, multi, div} = CounerSlice.actions;
// Reducer should be called in Store reducer
export default CounerSlice.reducer;