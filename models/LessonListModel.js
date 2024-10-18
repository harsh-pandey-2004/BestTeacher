const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    Lesson_category: { type: String, required: true },  // Category of the lesson
    TotalLessons: { type: Number, required: true },     // Total number of lessons in this category
    AgeCategory: { type: [Number], required: true },    // Age categories for this lesson
    Description: { type: String, required: true },      // Description of the lesson
    Subjects: { type: String, required: true },         // Subjects covered in the lesson
    heading_logo: { type: String },                     // Logo for the lesson (optional)
    duration: { type: String, required: true }          // Duration of each lesson
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = { Lesson, lessonSchema };  // Export both the model and schema
