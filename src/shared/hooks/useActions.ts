import { useDispatch } from "react-redux";
import { actions as favoriteSlice } from "@/features/favorites/model/favorites.slice";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
  ...favoriteSlice,
};

export const useActions = () => {
  const dispatch = useDispatch();
  // dispatch(actions.ToggleFavorites(11));
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
