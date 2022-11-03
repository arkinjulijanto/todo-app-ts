import "./App.css";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTodo />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4">
        <TodoCard />
      </div>
    </div>
  );
}

export default App;
