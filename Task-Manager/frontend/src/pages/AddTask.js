
import TaskForm from '../components/TaskForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
  const navigate = useNavigate();

  const handleSubmit = async (task) => {
    await axios.post('https://restomart-task-manager-backend-1.onrender.com/tasks', task);
    navigate('/');
  };

  return <TaskForm initialData={{ title: '', description: '', status: 'todo', dueDate: '' }} onSubmit={handleSubmit} />;
}
