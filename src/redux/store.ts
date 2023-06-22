import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import stepSlice from "./slice/main";
import roomSlice from "./slice/room";

const rootReducer = combineReducers({
  roomSlice,
  stepSlice,
});

// export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: {
    roomSlice,
    stepSlice,
    // steps: stepSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

// export const wrapper = createWrapper(store);
export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store>;

// export type AppDispatch = AppStore["dispatch"];

// export const wrapper = createWrapper(store, { debug: true });
