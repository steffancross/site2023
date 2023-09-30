import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    about: false,
    blocks: false,
  },
  reducers: {
    setAbout: (state, action) => {
      state.about = action.payload;
    },
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    },
  },
});

export const { setAbout, setBlocks } = mainSlice.actions;
export default mainSlice.reducer;
