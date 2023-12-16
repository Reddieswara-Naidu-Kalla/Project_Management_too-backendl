const express = require('express');
const Project = require('../models/project'); 
const router = express.Router();

// Get all projects
router.get('/getAllProjects', async (req, res) => {
  try {
    const projects = await Project.getProjectsByUserId(req.query.userId); 
    res.send(projects);
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Add Project
router.post('/addProject', async (req, res) => {
  try {
    const success = await Project.addProject(req.body);
    res.send({ success });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Edit Project
router.put('/editProject', async (req, res) => {
  try {
    await Project.editProject(req.body);
    res.send({ success: "Project updated successfully!" });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Delete Project
router.delete('/deleteProject/:projectId', async (req, res) => {
  const projectId = req.params.projectId;
  try {
    await Project.deleteProject(projectId);
    res.send({ success: "Project deleted successfully!" });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Get Project by ID
router.get('/getProjectById/:projectId', async (req, res) => {
  const projectId = req.params.projectId;
  try {
    const project = await Project.getProjectById(projectId);
    res.send(project);
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

module.exports = router;
