import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initSliceState = {
  name: string;
  avatarUrl: string;
  step: number;
};

const initialState: initSliceState = {
  name: "",
  avatarUrl: "",
  step: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setAvatar(state, action) {
      state.avatarUrl = action.payload;
    },
  },
});

export const stepSelector = (state: RootState) => state.stepSlice;

export const { setStep, setName, setAvatar } = stepSlice.actions;

export default stepSlice.reducer;
