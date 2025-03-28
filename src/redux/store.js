import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "@/redux/slices/misc";

export const store = configureStore({
  reducer: {
    misc: miscSlice,
  },
});
