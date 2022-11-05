import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:3000/api/v1/greetings";

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: [],
  reducers: {
    addGreeting(state, action) {
      state.greeting.push(action.payload);
    },
  },
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.status = "succeeded";
      return [action.payload];
    },
  },
});

export const { addGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
