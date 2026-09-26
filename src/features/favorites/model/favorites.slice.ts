import { createSlice } from "@reduxjs/toolkit";
import type { IAllCards } from "./types";

const initialState: Array<IAllCards> = [];

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    ToggleFavorites: (state, { payload }) => {
      const Flag = state.findIndex((e) => e.id === payload.id);

      if (Flag >= 0) {
        state.splice(Flag, 1);
      } else {
        state.push(payload);
      }
    },
  },
});

export const { actions, reducer } = favoriteSlice;
