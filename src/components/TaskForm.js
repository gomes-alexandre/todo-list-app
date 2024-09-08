// src/components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText.trim()) return;
        addTask({ id: Date.now(), text: taskText, completed: false });
        setTaskText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Adicione uma tarefa..." 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)} 
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TaskForm;