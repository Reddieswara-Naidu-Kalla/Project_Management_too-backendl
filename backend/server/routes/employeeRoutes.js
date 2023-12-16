const express = require('express');
const Employee=require('../models/employee');  
const router = express.Router();


// Get all employees
router.get('/getAllemployees', async (req, res) => {
  try {
    const employees = await Employee.getAllemployees();
    res.send(employees);
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Login post
router.post('/login', async (req, res) => {
  try {
    const employees = await Employee.login(req.body);
    res.send({ ...employees, PASSWORD: undefined });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Register route
router.post('/register', async (req, res) => {
  try {
    const employees = await Employee.register(req.body);
    res.send({ ...employees, PASSWORD: undefined });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Edit route
router.put('/edit', async (req, res) => {
  try {
    const employees = await Employee.editEmployee(req.body);
    res.send({ ...employees, PASSWORD: undefined });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

// Delete route
router.delete('/delete', async (req, res) => {
  try {
    await Employee.deleteEmployee(req.body);
    res.send({ success: "Good Riddance >:(" });
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
});

module.exports = router;

