import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sleep = (msec) => {
  const start = new Date();
  while (new Date() - start < msec);
};

export const fetchDummy = createAsyncThunk("fetch/dummy", async (num) => {
  await sleep(2000);
  return num;
});

const initialState = {
  value: 0,
  status: "idle",
};

export const customCounterSlice = createSlice({
  name: "customCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  customCounterSlice.actions;

export const selectCount = (state) => state.customCounter.value;

export default customCounterSlice.reducer;
