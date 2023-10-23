import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";

const myStore = configureStore({
  reducer: {
    task: taskReducer
  }
})

export default myStore;