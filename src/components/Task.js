// src/components/Task.js
import React from 'react';
import React, { useState } from 'react';

function Task({ task, toggleComplete, removeTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        task.text = newText; // Atualiza o texto da tarefa
    };

    const handleRemove = () => {
        const taskElement = document.getElementById('task-${task.id}');
        taskElement.classList.add('removing');
        setTimeout(() => removeTask(task.id), 300); // Espera a animação antes de remover
    };

    return (
        <li id={`task-${task.id}`} className={task.completed ? 'completed' : ''}>
            {isEditing ? (
                <form onSubmit={handleEdit}>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button type="submit">Salvar</button>
                </form>
            ) : (
                <>

                    <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
                    <div>
                        <button onClick={() => setIsEditing(true)}>Editar</button>
                        <button onClick={() => removeTask(task.id)}>Remover</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default Task;