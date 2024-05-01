// playlistRoutes.js

const express = require('express');
const router = express.Router();
const { createPlaylist, getAllPlaylists, getPlaylistById, updatePlaylistById, deletePlaylistById } = require('../controllers/playlistController');

// Create a new playlist
router.post('/', createPlaylist);

// Get all playlists of a user
router.get('/', getAllPlaylists);

// Get a single playlist by ID
router.get('/:id', getPlaylistById);

// Update a playlist by ID
router.put('/:id', updatePlaylistById);

// Delete a playlist by ID
router.delete('/:id', deletePlaylistById);

module.exports = router;
