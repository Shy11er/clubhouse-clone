import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initSliceState = {
  name: string;
  step: number;
};

const initialState: initSliceState = {
  name: "",
  step: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStep(state) {
      state.step++;
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const stepSelector = (state: RootState) => state.stepSlice;

export const { setStep, setName } = stepSlice.actions;

export default stepSlice.reducer;
