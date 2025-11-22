import React, { useState, useReducer, useEffect } from 'react';

import CreateTask from './CreateTask.jsx';


const taskReducer = (state, action) => {
  switch (action.type) {
    case 'task/add':
      return [...state, action.payload];
    case 'task/toggleStatus':
      return state.map(task => 
        task.id === action.payload 
        ? {...task, status: task.status === 'Completed' ? 'To Do': 'Completed'}
        : task
      );
    case 'task/setInitial':
      return action.payload;
    default:
      return state;
  }
};

const TaskTable = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // fecth default todos
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then( todos => {
        const firstFive_todos = todos.slice(0, 5);

        const initial_tasks = firstFive_todos.map(todo => ({
            id: todo.id,
            name: `Task ${todo.id}`,
            description: todo.title.trim(),
            status: todo.completed === true ? 'Completed' : 'To Do'
        }));

        dispatch({type: 'task/setInitial', payload: initial_tasks})
      })
      .catch(error => {
        console.error('Error fetching default todo list', error)
      });
  }, []);
  

  const addTask = (newTask) => {
    dispatch({ type: 'task/add', payload: newTask });
  };

  const toggleStatus = (taskId) => {
    dispatch({ type: 'task/toggleStatus', payload: taskId });
  };

  return (
    <div className="task-manager-container">
      <h1>Task Manager</h1>
      <button onClick={() => setShowForm(true)} disabled={showForm}>
        Create Task
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4">No tasks yet. Create one!</td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id} className={task.status === 'Completed' ? 'completed': ''}>
                <td>{task.name}</td>  
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td><button onClick={() => toggleStatus(task.id)}>Toggle Status</button></td>
              </tr>
            ))            
          )}
        </tbody>
      </table>
      {showForm && <CreateTask addTask={addTask} setShowForm={setShowForm} tasks={tasks}/>}
    </div>
  );
};

export default TaskTable;
