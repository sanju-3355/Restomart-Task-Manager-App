import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Task Manager</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Task</Link>
      </nav>
    </header>
  );
}
