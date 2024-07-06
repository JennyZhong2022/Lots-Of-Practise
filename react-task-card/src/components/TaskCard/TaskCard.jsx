


const TaskCard = ({ task, priority, onDelete }) => {
  const handleDelete = () => {
    onDelete(task); 
  };

  return (
    <div className="task-card">
      <h3>{task}</h3>
      <p>Priority: {priority}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskCard;