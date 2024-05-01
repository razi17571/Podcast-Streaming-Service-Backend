// episodeService.js

const Episode = require('../models/Episode');

// Create a new episode
exports.createEpisode = async (episodeData) => {
    try {
        const episode = new Episode(episodeData);
        await episode.save();
        return episode;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get all episodes
exports.getAllEpisodes = async () => {
    try {
        const episodes = await Episode.find();
        return episodes;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get a single episode by ID
exports.getEpisodeById = async (episodeId) => {
    try {
        const episode = await Episode.findById(episodeId);
        return episode;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Update an episode by ID
exports.updateEpisodeById = async (episodeId, updatedData) => {
    try {
        const episode = await Episode.findByIdAndUpdate(episodeId, updatedData, { new: true });
        return episode;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Delete an episode by ID
exports.deleteEpisodeById = async (episodeId) => {
    try {
        await Episode.findByIdAndDelete(episodeId);
    } catch (err) {
        throw new Error(err.message);
    }
};
