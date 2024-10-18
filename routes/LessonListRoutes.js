const express = require('express');
const router = express.Router();
const classController = require('../controller/ClassController');

// Create a new class with lessons
router.post('/classes', classController.createClass);

// Get all classes with lessons
router.get('/classes', classController.getAllClasses);

// Get a specific class by ID
router.get('/classes/:id', classController.getClassById);

// Update a class by ID
router.put('/classes/:id', classController.updateClass);

// Delete a class by ID
router.delete('/classes/:id', classController.deleteClass);

module.exports = router;
