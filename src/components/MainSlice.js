"use client";

import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    about: false,
    blocks: false,
    idc: false,
    adhoc: false,
    overlay: false,
  },
  reducers: {
    setAbout: (state, action) => {
      state.about = action.payload;
    },
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    },
    setIdc: (state, action) => {
      state.idc = action.payload;
    },
    setAdhoc: (state, action) => {
      state.adhoc = action.payload;
    },
    setOverlay: (state, action) => {
      state.overlay = action.payload;
    },
    setAllFalse: (state) => {
      for (const key in state) {
        state[key] = false;
      }
    },
  },
});

export const {
  setAbout,
  setBlocks,
  setIdc,
  setAdhoc,
  setOverlay,
  setAllFalse,
} = mainSlice.actions;
export default mainSlice.reducer;
