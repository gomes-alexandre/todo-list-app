// src/components/TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleComplete, removeTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <Task key={task.id} task={task} toggleComplete={toggleComplete} removeTask={removeTask} />
            ))}
        </ul>
    );
}

export default TaskList;