const Class = require('../models/Class');

// Create a new class with lessons
exports.createClass = async (req, res) => {
    try {
        const { className, lessons } = req.body;

        const newClass = new Class({
            className,
            lessons
        });

        await newClass.save();
        res.status(201).json({ message: 'Class created successfully', class: newClass });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all classes with lessons
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get a specific class by ID
exports.getClassById = async (req, res) => {
    try {
        const classData = await Class.findById(req.params.id);
        if (!classData) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json(classData);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a class by ID
exports.updateClass = async (req, res) => {
    try {
        const { className, lessons } = req.body;
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, {
            className,
            lessons
        }, { new: true });

        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.status(200).json({ message: 'Class updated successfully', class: updatedClass });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a class by ID
exports.deleteClass = async (req, res) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);
        if (!deletedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
