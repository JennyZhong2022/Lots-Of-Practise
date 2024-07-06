// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask({ task, priority });
    setTask('');
    setPriority('low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <label htmlFor="priority">Priority:</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="very high">Very High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;