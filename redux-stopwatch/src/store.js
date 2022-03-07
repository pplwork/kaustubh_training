import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./slices/Slice";

export default configureStore({
  reducer: {
    timer: timerSlice,
  },
});