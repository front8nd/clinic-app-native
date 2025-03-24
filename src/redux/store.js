import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "./slices/misc";

export const store = configureStore({
  reducer: {
    misc: miscSlice,
  },
});
