// routes/playlistRoutes.js
const express = require('express');
const { getAllPlaylists, createPlaylist, updatePlaylist, deletePlaylist } = require('../controller/PlaylistController');
// const authMiddleware = require('../middleware/authmiddleware');
const router = express.Router();

router.get('/', getAllPlaylists);
router.post('/', createPlaylist);
router.put('/:id', updatePlaylist);
router.delete('/:id', deletePlaylist);

module.exports = router;
