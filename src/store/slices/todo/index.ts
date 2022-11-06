import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, InitialTodo, Todo } from "./index.types";

const initialState: InitialState = {
  _todos: [],
  todos: [],
  todo: null,
  id: 0,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<InitialTodo>) => {
      const todo: Todo = {
        id: state.id,
        title: action.payload.title,
        description: action.payload.description
      }
      state._todos.push(todo);
      state.todos = state._todos;
      state.id += 1
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state._todos.findIndex((x: Todo) => x.id === action.payload)
      state._todos.splice(index, 1);
      state.todos = state._todos;
    },
    searchTodo: (state, action: PayloadAction<string>) => {
      state.todos = state._todos.filter((x: Todo) => {
        return (
          x.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          x.description.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
    },
  },
});

export const { addTodo, deleteTodo, searchTodo } = todoSlice.actions;

export default todoSlice.reducer;
