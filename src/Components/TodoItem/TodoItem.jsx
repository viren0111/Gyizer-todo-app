import React, { useState } from 'react';
import './TodoItem.css';
import del from '../../assets/delete.png'
import update from '../../assets/update.png'

function TodoItem({ index, todo, deleteTodo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);
    const [updatedDescription, setUpdatedDescription] = useState(todo.description);

    const handleDelete = () => {
        deleteTodo(index);
    };

    const handleUpdate = () => {
        updateTodo(index, { title: updatedTitle, description: updatedDescription });
        setIsEditing(false);
    };
    const truncateText = (text) => {
        const maxLength = 30;
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <div className="todo-item-one">
            {isEditing ? (
                <div className='editable'>
                    <div className="edit-input">
                        <input
                            type="text"
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                        />
                        <input
                            value={updatedDescription}
                            onChange={(e) => setUpdatedDescription(e.target.value)}
                        ></input>
                    </div>
                    <div className="edit-btn">
                            <img onClick={handleUpdate} src={update} alt="" />
                    </div>
                </div>
            ) : (
                <div className='non-editable'>
                    <div className="info-todo">
                        <h3>{todo.title}</h3>
                        <p>{truncateText(todo.description)}</p>
                    </div>
                    <div className="info">
                        <img onClick={() => setIsEditing(true)} src={update} alt="" />
                        <img onClick={handleDelete} src={del} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoItem;
