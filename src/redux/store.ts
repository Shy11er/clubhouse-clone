import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import stepSlice from "./slice/main";

const store = configureStore({
  reducer: {
    stepSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

type appDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<appDispatch>;

export default store;