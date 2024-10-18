const { StudioModel } = require("../models/StudioListModel"); // Ensure correct destructuring

// Create a new class with lessons
exports.createStudio = async (req, res) => {
  try {
    const newStudio = new StudioModel(req.body);
    await newStudio.save();
    res.status(201).json({ status: 'success', data: newStudio });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ status: 'error', message: 'Server error' }); // User-friendly message
  }
};

// Get all classes with lessons
exports.getAllStudio = async (req, res) => {
  try {
    console.log("Fetching all studios...");
    const studios = await StudioModel.find(); // Avoid variable name conflict
    console.log("Fetched studios:", studios);
    res.status(200).json({ status: 'success', data: studios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
};

// Get a specific class by ID
exports.getStudioById = async (req, res) => {
  try {
    const studioData = await StudioModel.findById(req.params.id);
    if (!studioData) {
      return res.status(404).json({ status: 'error', message: "Studio not found" });
    }
    res.status(200).json({ status: 'success', data: studioData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
};

// Update a class by ID
exports.updateStudio = async (req, res) => {
  try {
    const updatedStudio = await StudioModel.findByIdAndUpdate(
      req.params.id,
      req.body, // Directly use req.body for simplicity
      { new: true }
    );

    if (!updatedStudio) {
      return res.status(404).json({ status: 'error', message: "Studio not found" });
    }

    res.status(200).json({ status: 'success', message: "Studio updated successfully", data: updatedStudio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
};

// Delete a class by ID
exports.deleteStudio = async (req, res) => {
  try {
    const deletedStudio = await StudioModel.findByIdAndDelete(req.params.id);
    if (!deletedStudio) {
      return res.status(404).json({ status: 'error', message: "Studio not found" });
    }
    res.status(200).json({ status: 'success', message: "Studio deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
};
