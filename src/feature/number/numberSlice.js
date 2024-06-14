import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counterSlice";
const initialState = {
  numberValue: 5,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++;
    },
    decrement: (state) => {
      state.numberValue--;
    },
    incrementByAmount: (state, action) => {
      state.numberValue += action.payload;
    },
  },
  extraReducers: (builder) =>{
    builder
      .addCase(incrementCounter,(state, actions) => {
        state.numberValue++;
      })
    
  },
});

export default numberSlice.reducer;
export const { increment, decrement, incrementByAmount } = numberSlice.actions;
export const selectNumber = (store) => store.number.numberValue;
