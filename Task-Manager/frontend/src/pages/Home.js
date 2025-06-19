
import { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import axios from 'axios';
import Loader from '../components/Loader';
import '../styles/Home.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all'); 

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://restomart-task-manager-backend-1.onrender.com/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://restomart-task-manager-backend-1.onrender.com/tasks/${id}`);
    fetchTasks();
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  }
  
  const filteredTasks = statusFilter === 'all'
    ? tasks
    : tasks.filter(task => task.status === statusFilter);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='home-container'>
      <div className="filter-container">
        <h2 style={{textAlign: "center", marginTop: "1rem"}}>All Tasks</h2>
        <select id="statusFilter" value={statusFilter} onChange={handleStatusChange}>
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <TaskList tasks={filteredTasks} onDelete={deleteTask} />
      )}
    </div>
  )
}
