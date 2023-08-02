import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNumber: [],
  tickets: 0,
  data: {}

};

export const NumberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    selectNumber: (state, action) => {
      const newNumber = action.payload;

      const index = state.selectedNumber.indexOf(newNumber);

      if (!newNumber){
        state.selectedNumber = []
      }
      else if (index === -1) {

        state.selectedNumber.push(newNumber);
      } else {
        state.selectedNumber.splice(index, 1);
      }
    },
    ticketsQuantity: (state, action) => {
      state.tickets = action.payload;
    },

    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { selectNumber } = NumberSlice.actions;

export const { ticketsQuantity } = NumberSlice.actions;

export default NumberSlice.reducer;
