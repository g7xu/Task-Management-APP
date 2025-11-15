import React, { useState } from 'react';

import CreateTask from './CreateTask.jsx';

//TODO
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'task/add':
      return state;
    case 'task/toggleStatus':
      return state;
    default:
      return state;
  }
};

const TaskTable = () => {
  const [showForm, setShowForm] = useState(false);

  //TODO: fetch 5 todo and add them to tasks from https://jsonplaceholder.typicode.com/todos when the component is first rendered.

  //TODO: addTask function
  const addTask = (newTask) => {
    console.log('add newTask!');
  };

  //TODO: toggleStatus function
  const toggleStatus = (taskId) => {
    console.log(`toggle status of {taskId}`);
  };

  return (
    <div>
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
        <tbody>TODO</tbody>
      </table>
      {/* Conditionally render <CreateTask /> based on `showForm` value and pass necessary functions. */}
      <CreateTask />
    </div>
  );
};

export default TaskTable;
