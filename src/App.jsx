// App.js
import React, { useState, useEffect } from 'react';
import TodoList from './Components/TodoList/TodoList';
import TodoForm from './Components/TodoForm/TodoForm';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Function to add a new todo
  const addTodo = (todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Function to update a todo
  const updateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="app">
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
