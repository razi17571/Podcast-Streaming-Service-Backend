// podcastController.js

const Podcast = require('../models/Podcast');

// Create a new podcast
// Example route handler for creating a podcast
exports.createPodcast = async (req, res) => {
    try {
        // Extract user ID from request (assuming user object is available in req.user)
        const userId = req.user.id;

        // Create a new podcast with createdBy field set to user ID
        const newPodcast = new Podcast({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            coverArt: req.body.coverArt,
            createdBy: userId // Assign user ID to createdBy field
        });

        // Save the new podcast to the database
        await newPodcast.save();

        res.status(201).json(newPodcast);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Get all podcasts
exports.getAllPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.find().populate('createdBy', 'username'); // Populate createdBy field with username

        res.json(podcasts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single podcast by ID
exports.getPodcastById = async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id).populate('createdBy', 'username');

        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }

        res.json(podcast);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a podcast by ID
exports.updatePodcastById = async (req, res) => {
    try {
        const { title, description, tags, coverArt } = req.body;

        let podcast = await Podcast.findById(req.params.id);

        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }

        // Check if the user owns the podcast
        if (podcast.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        // Update podcast fields
        podcast.title = title;
        podcast.description = description;
        podcast.tags = tags;
        podcast.coverArt = coverArt;

        await podcast.save();

        res.json(podcast);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a podcast by ID
exports.deletePodcastById = async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id);

        if (!podcast) {
            return res.status(404).json({ msg: 'Podcast not found' });
        }

        // Check if the user owns the podcast
        if (podcast.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await podcast.remove();

        res.json({ msg: 'Podcast deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
