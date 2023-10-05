"use client";

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../components/MainSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
