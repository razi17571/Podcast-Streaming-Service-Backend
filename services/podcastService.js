9// podcastService.js
const Podcast = require('../models/Podcast');

// Create a new podcast
exports.createPodcast = async (podcastData) => {
    try {
        const podcast = new Podcast(podcastData);
        await podcast.save();
        return podcast;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get all podcasts
exports.getAllPodcasts = async () => {
    try {
        const podcasts = await Podcast.find();
        return podcasts;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get a single podcast by ID
exports.getPodcastById = async (podcastId) => {
    try {
        const podcast = await Podcast.findById(podcastId);
        return podcast;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Update a podcast by ID
exports.updatePodcastById = async (podcastId, updatedData) => {
    try {
        const podcast = await Podcast.findByIdAndUpdate(podcastId, updatedData, { new: true });
        return podcast;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Delete a podcast by ID
exports.deletePodcastById = async (podcastId) => {
    try {
        await Podcast.findByIdAndDelete(podcastId);
    } catch (err) {
        throw new Error(err.message);
    }
};
