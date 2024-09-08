// src/components/Task.js
import React from 'react';

function Task({ task, toggleComplete, removeTask }) {
    return (
        <li className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(task.id)}>
                {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Remover</button>
        </li>
    );
}

export default Task;