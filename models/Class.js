const mongoose = require('mongoose');
const { lessonSchema } = require('./LessonListModel'); // Correctly import the lesson schema

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },        // Class name (e.g., Preschool, Kindergarten, etc.)
    lessons: [lessonSchema]                             // Use the lessonSchema for the array of lessons
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
