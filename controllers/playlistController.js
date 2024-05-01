// PlaylistController.js

const Playlist = require('../models/Playlist');

// Create a new playlist
exports.createPlaylist = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.user.id; // Assuming user ID is included in the request after authentication

        const playlist = new Playlist({
            name,
            user: userId
        });

        await playlist.save();

        res.status(201).json(playlist);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get all playlists of a user
exports.getAllPlaylists = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is included in the request after authentication
        const playlists = await Playlist.find({ user: userId });

        res.json(playlists);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single playlist by ID
exports.getPlaylistById = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({ msg: 'Playlist not found' });
        }

        res.json(playlist);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a playlist by ID
exports.updatePlaylistById = async (req, res) => {
    try {
        const { name } = req.body;

        let playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({ msg: 'Playlist not found' });
        }

        // Update playlist fields
        playlist.name = name;

        await playlist.save();

        res.json(playlist);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a playlist by ID
exports.deletePlaylistById = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({ msg: 'Playlist not found' });
        }

        await playlist.remove();

        res.json({ msg: 'Playlist deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
