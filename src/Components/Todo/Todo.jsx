import React from 'react'
import "./Todo.css"
import { MdDelete, MdAdd, MdCheckCircle, MdRadioButtonUnchecked, MdEdit } from "react-icons/md";
import { useState } from 'react'

const Todo = () => {
    const [inputVal, setInputVal] = useState("");
    const [tasks, setTasks] = useState([]);
    const [priority, setPriority] = useState("medium");

    function handleBtn(){
        if(inputVal.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: inputVal.trim(),
            completed: false,
            priority: priority,
            createdAt: new Date().toLocaleDateString()
        };

        setTasks((prevTasks) => {
            const exists = prevTasks.some(task => task.text.toLowerCase() === inputVal.toLowerCase());
            if(exists){
                alert("Todo Already Exists.");
                return prevTasks;
            }
            setInputVal('');
            return [...prevTasks, newTask];
        });
    }

    function toggleTask(id){
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    }

    function removeTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            handleBtn();
        }
    }
  return (
    <div className="todo-app">
        <div className="todo-container">
            <div className="todo-header">
                <h1 className="todo-title">📋 Task Manager</h1>
                <p className="todo-subtitle">Organize your workflow efficiently</p>
            </div>

            <div className="input-section">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Enter your task description...'
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="todo-input"
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="priority-select"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <button
                        className='add-btn'
                        disabled={!inputVal.trim()}
                        onClick={handleBtn}
                    >
                        <MdAdd />
                        Create Task
                    </button>
                </div>
            </div>

            <div className="tasks-section">
                <div className="tasks-header">
                    <h2 className="tasks-title">Your Tasks</h2>
                    <span className="tasks-count">
                        {tasks.filter(task => !task.completed).length} remaining
                    </span>
                </div>

                <div className="tasks-list">
                    {tasks.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">🎯</div>
                            <h3>No tasks scheduled</h3>
                            <p>Start building your productivity workflow</p>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`}
                            >
                                <div className="task-content">
                                    <button
                                        className="check-btn"
                                        onClick={() => toggleTask(task.id)}
                                    >
                                        {task.completed ?
                                            <MdCheckCircle className="check-icon completed" /> :
                                            <MdRadioButtonUnchecked className="check-icon" />
                                        }
                                    </button>
                                    <div className="task-text">
                                        <span className={`task-title ${task.completed ? 'strikethrough' : ''}`}>
                                            {task.text}
                                        </span>
                                        <div className="task-meta">
                                            <span className={`priority-badge priority-${task.priority}`}>
                                                {task.priority}
                                            </span>
                                            <span className="task-date">{task.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className='delete-btn'
                                    onClick={() => removeTask(task.id)}
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo;
