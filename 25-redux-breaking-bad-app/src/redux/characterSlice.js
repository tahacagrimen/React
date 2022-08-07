import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Slice oluşturmak için ilk önce yukarıdaki kütüphaneyi import ediyoruz.
import axios from "axios";

const limit = 12;

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${
        page * limit
      }`
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
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.isLoading = false;
      console.log(action.payload);
      state.page += 1;

      if (action.payload.length < limit) {
        state.hasNextPage = false;
      }
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
