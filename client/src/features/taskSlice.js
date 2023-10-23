import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
  loading: false,
  tasks: [],
  err: ""
}

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  try {
    const response = await axios.get("/api/");
    return await response.data
  }
  catch (err) {
    console.log(err);
  }
})

const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.err = "";
    })
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.err = action.error.message;
    })
  }
})

export default taskSlice.reducer;