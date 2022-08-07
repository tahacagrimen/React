import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Slice oluşturmak için ilk önce yukarıdaki kütüphaneyi import ediyoruz.
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(
      `https://www.breakingbadapi.com/api/characters?limit=10`
    );
    return res.data;
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      console.log(action.payload);
    },
    [fetchCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default characterSlice.reducer;
// en son export ediyoruz.
