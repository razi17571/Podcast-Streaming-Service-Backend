// episodeRoutes.js

const express = require('express');
const router = express.Router();
const { createEpisode, getAllEpisodes, getEpisodeById, updateEpisodeById, deleteEpisodeById } = require('../controllers/episodeController');

// Create a new episode
router.post('/:podcastId', createEpisode);

// Get all episodes of a podcast
router.get('/:podcastId', getAllEpisodes);

// Get a single episode by ID
router.get('/episode/:id', getEpisodeById);

// Update an episode by ID
router.put('/:id', updateEpisodeById);

// Delete an episode by ID
router.delete('/:id', deleteEpisodeById);

module.exports = router;
