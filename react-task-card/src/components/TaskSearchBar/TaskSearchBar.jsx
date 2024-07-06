// TaskList.js
import React, { useState } from 'react';
import TaskCard from '../TaskCard/TaskCard';
import TaskForm from '../TaskForm/TaskForm';

const TaskList = ({taskData}) => {


  const [tasks, setTasks] = useState(taskData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleSortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.priority.localeCompare(b.priority);
      } else {
        return b.priority.localeCompare(a.priority);
      }
    });
    setTasks(sortedTasks);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleDeleteTask = (taskName) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskName);
    setTasks(updatedTasks);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-list">
      <TaskForm onAddTask={handleAddTask} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <button onClick={handleSortTasks}>
        Sort by Priority ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      {filteredTasks.map((taskData, index) => (
        <TaskCard
          key={index}
          task={taskData.task}
          priority={taskData.priority}
          onDelete={() => handleDeleteTask(taskData.task)}
        />
      ))}
    </div>
  );
};

export default TaskList;