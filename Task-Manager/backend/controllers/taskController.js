
const Task = require('../models/taskModel');
const { v4: uuidv4 } = require('uuid');

exports.getTasks = async (req, res) => {
   try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createTask = async (req, res) => {
  const task = new Task({ ...req.body, id: uuidv4() });
  await task.save();
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findOneAndUpdate({ id }, req.body, { new: true });
  res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ id: req.params.id });
  res.json({ message: 'Task deleted' });
};
