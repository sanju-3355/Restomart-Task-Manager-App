
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import axios from 'axios';

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then(res => {
      const t = res.data.find(task => task.id === id);
      setTask(t);
    });
  }, [id]);

  const handleSubmit = async (updatedTask) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
    navigate('/');
  };

  return task ? <TaskForm initialData={task} onSubmit={handleSubmit} /> : <p>Loading...</p>;
}
