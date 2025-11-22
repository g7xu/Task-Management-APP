import React, { useState } from 'react';

const CreateTask = ({ addTask, setShowForm, tasks }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of HTML
    
    if (name.trim() === '' || description.trim() === '') {
      alert('Name and description are required');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: name.trim(),
      description: description.trim(),
      status: 'To Do'
    }

    addTask(newTask);
    setName('');
    setDescription('');
    setShowForm(false); 
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Task Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add Task</button>
        <button type="button" className="cancel" onClick={() => setShowForm(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
