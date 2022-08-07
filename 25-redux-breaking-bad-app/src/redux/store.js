import { configureStore } from "@reduxjs/toolkit";

import characterSlice from "./characterSlice";
// slice dosyamızı import ediyoruz.

export const store = configureStore({
  reducer: {
    characters: characterSlice,
  },
});
