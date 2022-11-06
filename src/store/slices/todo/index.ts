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
      state.todos = state._todos;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state._todos.splice(action.payload, 1);
      state.todos = state._todos;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
