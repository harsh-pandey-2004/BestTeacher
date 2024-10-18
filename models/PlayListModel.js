const mongoose = require('mongoose');

// Define the Lesson schema with a 'duration' field
const LessonSchema = new mongoose.Schema({
    Lesson_category: { type: String, required: true },  // Category of the lesson
    AgeCategory: { type: [Number], required: true },    // Age categories for the lesson
    Description: { type: String, required: true },      // Detailed description of the lesson
    Subjects: { type: String, required: true },         // Subjects covered in the lesson
    heading_logo: { type: String },                     // Logo or image for the lesson
    duration: { type: String, required: true }          // Duration of the lesson (e.g., "45 minutes")
});

// Define the Playlist schema, which contains an array of lessons
const PlaylistSchema = new mongoose.Schema({
    Lesson_category: { type: String, required: true },  // Category of the playlist
    TotalLessons: { type: Number, required: true },     // Total number of lessons in the playlist
    AgeCategory: { type: [Number], required: true },    // Age categories for the playlist
    Description: { type: String, required: true },      // Description of the playlist
    Subjects: { type: String, required: true },         // Subjects covered in the playlist
    heading_logo: { type: String },                     // Logo or image for the playlist
    lessons: [LessonSchema]                             // Array of lessons (based on LessonSchema)
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
