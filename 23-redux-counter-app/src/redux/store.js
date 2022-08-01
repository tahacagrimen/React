import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";

// Bu şekilde store tanımımızı yaptık.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
