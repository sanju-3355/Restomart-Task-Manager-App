
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['todo', 'in_progress', 'done'], default: 'todo' },
  dueDate: Date,
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
