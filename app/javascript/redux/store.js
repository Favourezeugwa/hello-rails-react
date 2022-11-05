// Path: app\javascript\redux\store.js
import { configureStore } from '@reduxjs/toolkit'
import greetingReducer from './greeting/greetingSlice'

export default configureStore({
  reducer: {
    greeting: greetingReducer
  }
})