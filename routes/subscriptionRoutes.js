// subscriptionRoutes.js

const express = require('express');
const router = express.Router();
const { subscribeToPodcast, unsubscribeFromPodcast } = require('../controllers/subscriptionController');

// Subscribe to a podcast
router.post('/subscribe', subscribeToPodcast);

// Unsubscribe from a podcast
router.delete('/unsubscribe', unsubscribeFromPodcast);

module.exports = router;
