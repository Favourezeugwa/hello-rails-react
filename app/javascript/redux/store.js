// Path: app\javascript\redux\store.js
import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greeting/greetingSlice";

export default configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});
