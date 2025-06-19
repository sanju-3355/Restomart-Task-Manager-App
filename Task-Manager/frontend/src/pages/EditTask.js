
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import axios from 'axios';
import Loader from '../components/Loader';

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get('https://restomart-task-manager-backend-1.onrender.com/tasks').then(res => {
      const t = res.data.find(task => task.id === id);
      setTask(t);
    });
  }, [id]);

  const handleSubmit = async (updatedTask) => {
    await axios.put(`https://restomart-task-manager-backend-1.onrender.com/tasks/${id}`, updatedTask);
    navigate('/');
  };

  return task ? <TaskForm initialData={task} onSubmit={handleSubmit} /> : <Loader />;
}
