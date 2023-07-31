import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNumber: []
};

export const NumberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    selectNumber: (state, action) => {
      const newNumber = action.payload;

      const index = state.selectedNumber.indexOf(newNumber);
      if (index === -1) {

        state.selectedNumber.push(newNumber);
      } else {
        state.selectedNumber.splice(index, 1);
      }
    }
  }
});

export const { selectNumber } = NumberSlice.actions;

export default NumberSlice.reducer;
