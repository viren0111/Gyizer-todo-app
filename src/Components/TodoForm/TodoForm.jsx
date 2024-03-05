import React, { useState } from 'react';
import './TodoForm.css'
function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <div className="input-field">
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Input..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className="create-todo-button"><button type="submit">+</button></div>

    </form>
  );
}

export default TodoForm;
