import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "@/features/favorites/model/favorites.slice";

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
