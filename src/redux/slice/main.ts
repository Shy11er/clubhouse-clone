import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type UserData = {
  id: number;
  fullname: string;
  avatarUrl: string;
  isActive: number;
  username: string;
  phone: string;
  token?: string;
  step?: number;
};

const initialState: UserData = {
  id: 0,
  fullname: "",
  avatarUrl: "",
  isActive: 0,
  username: "",
  phone: "",
  token: "",
  step: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setUserName(state, action) {
      state.username = action.payload;
    },
    setFullName(state, action) {
      state.fullname = action.payload;
    },
    setAvatar(state, action) {
      state.avatarUrl = action.payload;
    },
    setData(state, action) {
      state.fullname = action.payload.fullname || "";
      state.username = action.payload.username;
      state.avatarUrl = action.payload.avatarUrl;
      state.id = action.payload.id;
      state.isActive = action.payload.isActive;
      state.token = action.payload.token;
    },
  },
});

export const stepSelector = (state: RootState) => state.stepSlice;

export const { setStep, setUserName, setFullName, setAvatar, setData } =
  stepSlice.actions;

export default stepSlice.reducer;
