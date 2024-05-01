// episodeController.js

const Episode = require('../models/Episode');

// Create a new episode
exports.createEpisode = async (req, res) => {
    try {
        const { title, description, audioFile, releaseDate } = req.body;
        const podcastId = req.params.podcastId; // Assuming podcast ID is passed in the URL

        const episode = new Episode({
            title,
            description,
            audioFile,
            releaseDate,
            podcast: podcastId
        });

        await episode.save();

        res.status(201).json(episode);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get all episodes of a podcast
exports.getAllEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.find({ podcast: req.params.podcastId });

        res.json(episodes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single episode by ID
exports.getEpisodeById = async (req, res) => {
    try {
        const episode = await Episode.findById(req.params.id);

        if (!episode) {
            return res.status(404).json({ msg: 'Episode not found' });
        }

        res.json(episode);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update an episode by ID
exports.updateEpisodeById = async (req, res) => {
    try {
        const { title, description, audioFile, releaseDate } = req.body;

        let episode = await Episode.findById(req.params.id);

        if (!episode) {
            return res.status(404).json({ msg: 'Episode not found' });
        }

        // Update episode fields
        episode.title = title;
        episode.description = description;
        episode.audioFile = audioFile;
        episode.releaseDate = releaseDate;

        await episode.save();

        res.json(episode);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete an episode by ID
exports.deleteEpisodeById = async (req, res) => {
    try {
        const episode = await Episode.findById(req.params.id);

        if (!episode) {
            return res.status(404).json({ msg: 'Episode not found' });
        }

        await episode.remove();

        res.json({ msg: 'Episode deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
