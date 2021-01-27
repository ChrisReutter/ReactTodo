import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/Todolist";
import {TodoProvider} from "./TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Navbar />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
