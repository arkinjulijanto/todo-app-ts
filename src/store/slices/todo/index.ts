import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Todo } from "./index.types";

const initialState: InitialState = {
  _todos: [],
  todos: [],
  todo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state._todos.push(action.payload);
      state.todos.push(action.payload);
    },
  },
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;
