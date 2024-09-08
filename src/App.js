// src/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all'); // Filtro inicial

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const toggleComplete = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const filterTasks = () => {
        if (filter === 'completed') {
            return tasks.filter(task => task.completed);
        } else if (filter === 'pending') {
            return tasks.filter(task => !task.completed);
        }
        return tasks; // Se o filtro for 'all'
    };

    return (
        <div className="app">
            <h1>Lista de Tarefas</h1>
            <TaskForm addTask={addTask} />

            {/* Botões de filtro */}
            <div className="filters">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todas</button>
                <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Concluídas</button>
                <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pendentes</button>
            </div>

            <TaskList tasks={filterTasks()} toggleComplete={toggleComplete} removeTask={removeTask} />
        </div>
    );
}

export default App;