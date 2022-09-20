import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    counterUp: (state) => {
      state.value += 1;
    },
    counterDown: (state) => {
      state.value -= 1;
    },
  },
});

// reducer isimleri ile aynı olacak şekilde action lar otomatik oluşturulur
// ve export edilir
export const { counterUp, counterDown } = counterSlice.actions;

// reducer export edilir.
export default counterSlice.reducer;
