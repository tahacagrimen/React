import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // Name aslında state e ulaşmak istetiğimizde kullandığımız isim.
  name: "counter",
  initialState: {
    // Oluşturulduğu zaman ilk değerimiz.
    value: 0,
  },
  // Reducer ın içerisinde state i güncelleyecek olan tanımları gireriz.
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
