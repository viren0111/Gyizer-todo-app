import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <div className="todo-list">
    {todos.length === 0 ? (
      <p>No task</p>
    ) : (
      todos.map((todo, index) => (
        <div className="list-item" key={index}>
          <TodoItem index={index} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
      ))
    )}
  </div>
  
  );
}

export default TodoList;
