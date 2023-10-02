import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    about: false,
    blocks: false,
    idc: false,
    adhoc: false,
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
  },
});

export const { setAbout, setBlocks, setIdc, setAdhoc } = mainSlice.actions;
export default mainSlice.reducer;
