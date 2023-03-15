import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
  isShowGlobalLoading: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setIsShowGlobalLoading: (state, action) => {
      state.isShowGlobalLoading = action.payload;
    },
  },
});

export const { setMode, setIsShowGlobalLoading } = globalSlice.actions;

export default globalSlice.reducer;
