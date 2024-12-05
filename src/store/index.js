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
    setMode: (state, action) => {
      state.mode = action.payload;
      window.localStorage.setItem("theme", action.payload);
      document.documentElement.classList.add(action.payload);

      if (action.payload === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.remove("light");
      }
    },
    setIsShowGlobalLoading: (state, action) => {
      state.isShowGlobalLoading = action.payload;
    },
  },
});

export const { setMode, setIsShowGlobalLoading } = globalSlice.actions;

export default globalSlice.reducer;
