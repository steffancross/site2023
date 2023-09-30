import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    about: false,
    blocks: false,
    idc: false,
    adhoc: false,
    firstVisit: true,
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
    setFirstVisit: (state, action) => {
      state.firstVisit = action.payload;
    },
  },
});

export const { setAbout, setBlocks, setIdc, setAdhoc, setFirstVisit } =
  mainSlice.actions;
export default mainSlice.reducer;
