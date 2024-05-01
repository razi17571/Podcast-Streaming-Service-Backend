// podcastRoutes.js

const express = require('express');
const router = express.Router();
const { createPodcast, getAllPodcasts, getPodcastById, updatePodcastById, deletePodcastById } = require('../controllers/podcastController');

// Create a new podcast
router.post('/', createPodcast);

// Get all podcasts
router.get('/', getAllPodcasts);

// Get a single podcast by ID
router.get('/:id', getPodcastById);

// Update a podcast by ID
router.put('/:id', updatePodcastById);

// Delete a podcast by ID
router.delete('/:id', deletePodcastById);

module.exports = router;
