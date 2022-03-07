import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "timer",
  initialState: {
    time: 0,
    laps: [],
  },
  reducers: {
    increment: (state, action) => {
      state.time += action.payload;
    },
    reset: (state) => {
      state.time = 0;
    },
    setLaps: (state, action) => {
      state.laps = [action.payload,...state.laps];
    },
    resetLaps: (state) => {
      state.laps = [];
    },
  },
});

export const { increment, reset, setLaps, resetLaps } = Slice.actions;

export default Slice.reducer;




