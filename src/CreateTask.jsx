import React, { useState } from 'react';

const CreateTask = () => {
  const handleSubmit = (e) => {
    //TODO: add task to tasks. destroy current component.
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Task Name" />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" placeholder="Task Description" />
        </div>
        <button type="submit">Add Task</button>
        <button type="button" class="cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
