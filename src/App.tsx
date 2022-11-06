import "./App.css";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import TodoCard from "./components/TodoCard";
import { useAppSelector } from "./store/hooks";
import { Todo } from "./store/slices/todo/index.types";

function App() {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <div className="App">
      <Navbar />
      <AddTodo />
      <div className="container mt-8 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {todos.map((x: Todo) => {
          return <TodoCard item={x} />;
        })}
      </div>
    </div>
  );
}

export default App;
