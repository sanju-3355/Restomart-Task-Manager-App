
import '../styles/TaskForm.css';
import { useState, useEffect } from 'react';

export default function TaskForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(initialData);

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} required placeholder="Title" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="todo">To Do</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <input type="date" name="dueDate" value={form.dueDate?.substring(0, 10) || ''} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}
