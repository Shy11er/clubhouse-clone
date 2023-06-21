import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { RoomType } from "../../../api/RoomApi";
import { Room } from "../../../utils/types";
import { RoomApi } from "../../../api/RoomApi";
import { Axios } from "../../../core/axios";

interface InitType {
  items: Room[];
}

const initialState: InitType = {
  items: [],
};

// export const fetchCreateRoom = createAsyncThunk<
//   Room,
//   { title: string; type: string }
// >("rooms/fetchCreateRoomStatus", async ({ title, type }) => {
//   try {
//     const room = await RoomApi(Axios).createRoom({
//       title,
//       type,
//     });
//     return room;
//   } catch (error) {
//     throw Error("Failed to create a room");
//   }
// });

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRooms(state, action) {
      // state.items = [...state.items, action.payload];
      state.items.push(action.payload);
    },
    updateRoomSpeakers(state, action) {
      state.items = state.items.map((room) => {
        if (room.id === action.payload[0].roomId) {
          room.speakers = action.payload;
        }

        return room;
      });
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       fetchCreateRoom.fulfilled.type,
  //       (state, action: PayloadAction<Room>) => {
  //         state.items.push(action.payload);
  //       }
  //     )
  //     .addCase(
  //       fetchCreateRoom.rejected.type,
  //       (state, action: PayloadAction<Room>) => {
  //         state.items = [];
  //       }
  //     )
  //     .addCase(HYDRATE as any, (state, action: PayloadAction<RootState>) => {
  //       state.items = action.payload.rooms.items;
  //     });
  // },
});

export const roomSelector = (state: RootState) => state.roomSlice;

export const { setRooms, updateRoomSpeakers } = roomSlice.actions;
// export const roomsReducer = roomSlice.reducer;
export default roomSlice.reducer;
