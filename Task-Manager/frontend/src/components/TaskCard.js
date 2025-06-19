
import '../styles/TaskCard.css';
import { useNavigate } from 'react-router-dom';

export default function TaskCard({ task, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className='status'>Status: {task.status}</p>
      <div className="card-actions">
        <button className='edit-btn' onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
        <button className='delete-btn' onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
