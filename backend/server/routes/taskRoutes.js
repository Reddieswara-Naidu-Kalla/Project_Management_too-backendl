const express = require('express');
const Task = require('../models/task'); 
const router = express.Router();


// Get all tasks by project ID
router.get('/getAllTasksByProject/:projectId', async (req, res) => {
  const projectId = req.params.projectId;
  try {
    const tasks = await Task.getTasksByProjectId(projectId);
    res.send(tasks);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Add Task
router.post('/addTask', async (req, res) => {
  try {
    const success = await Task.addTask(req.body);
    res.send({ success });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Edit Task
router.put('/editTask', async (req, res) => {
  try {
    await Task.editTask(req.body);
    res.send({ success: "Task updated successfully!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Delete Task
router.delete('/deleteTask/:taskId', async (req, res) => {
  const taskId = req.params.taskId;
  try {
    await Task.deleteTask(taskId);
    res.send({ success: "Task deleted successfully!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Get Task by ID
router.get('/getTaskById/:taskId', async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const task = await Task.getTaskById(taskId);
    res.send(task);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
