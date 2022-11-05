import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./index.types";

const initialState: InitialState = {
    todos: [],
    _todos: [],
    todo: null,
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {}
})

export default todoSlice.reducer;