import { useState } from "react";
import "./styles.css";
import TodoForm from "./TodoForm.jsx";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((currentTodos) => {
      return [...currentTodos, newTodo];
    });
  }

  function toggleTodos(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm onAdd={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodos}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
