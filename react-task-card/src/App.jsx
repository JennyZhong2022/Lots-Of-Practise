import './App.css';
import TaskCard from './components/TaskCard/TaskCard';
import TaskForm from './components/TaskForm/TaskForm';
import React, { useState } from 'react';
// import TaskList from './components/TaskSearchBar/TaskSearchBar';

const taskData = [
  { task: 'Clean the bathroom', priority: 'low' },
  { task: 'Walk the dog', priority: 'high' },
  { task: 'Do codewars', priority: 'very high' },
  { task: 'Cook dinner', priority: 'medium' },
];

function App() {
  const [tasks, setTasks] = useState(taskData);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskName) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskName);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task.task}
          priority={task.priority}
          onDelete={() => handleDeleteTask(task.task)}
        />
      ))}
      {/* <TaskList taskData={taskData} /> */}
    </div>
  );
}

export default App;