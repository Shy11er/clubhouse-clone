import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../../utils/types";
import { RootState } from "../store";

const initialState: UserData = {
  id: 0,
  fullname: "",
  avatarUrl: "",
  isActive: 0,
  username: "",
  phone: "",
  token: "",
  step: 0,
  withGithub: false,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
      window.localStorage.setItem("step", action.payload);
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
    setPhone(state, action) {
      state.phone = action.payload;
    },
    setData(state, action) {
      state.fullname = action.payload.fullname;
      state.username = action.payload.username;
      state.avatarUrl = action.payload.avatarUrl;
      state.id = action.payload.id;
      state.isActive = action.payload.isActive;
      state.token = action.payload.token;
    },
    setWithGit(state, action) {
      state.withGithub = action.payload;
    },
  },
});

export const stepSelector = (state: RootState) => state.stepSlice;

export const {
  setStep,
  setUserName,
  setFullName,
  setAvatar,
  setData,
  setPhone,
  setWithGit,
} = stepSlice.actions;

export default stepSlice.reducer;
