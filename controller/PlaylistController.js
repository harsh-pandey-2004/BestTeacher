// controllers/playlistController.js
const Playlist = require('../models/PlayListModel');

exports.getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find();
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPlaylist = async (req, res) => {
    try {
        const { Lesson_category, TotalLessons, AgeCategory, Description, Subjects, heading_logo, lessons } = req.body;

        // Create the playlist with embedded lessons
        const playlist = new Playlist({
            Lesson_category,
            TotalLessons,
            AgeCategory,
            Description,
            Subjects,
            heading_logo,
            lessons  // Array of lessons, each with its own 'duration'
        });

        await playlist.save();
        res.status(201).json({ message: 'Playlist created successfully', playlist });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updatePlaylist = async (req, res) => {
    try {
        const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlaylist) return res.status(404).json({ message: 'Playlist not found' });
        res.json(updatedPlaylist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePlaylist = async (req, res) => {
    try {
        const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id);
        if (!deletedPlaylist) return res.status(404).json({ message: 'Playlist not found' });
        res.json({ message: 'Playlist deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
