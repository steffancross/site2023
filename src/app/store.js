import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../components/MainSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
