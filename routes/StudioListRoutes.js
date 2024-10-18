const express = require('express');
const router = express.Router();
const StudioController = require('../controller/StudioListController');

// Create a new Studio with lessons
router.post('/studios', StudioController.createStudio);

// Get all Studios with lessons
router.get('/studios', StudioController.getAllStudio);

// Get a specific Studio by ID
router.get('/studios/:id', StudioController.getStudioById);

// Update a Studio by ID
router.put('/studios/:id', StudioController.updateStudio);

// Delete a Studio by ID
router.delete('/studios/:id', StudioController.deleteStudio);

module.exports = router;
