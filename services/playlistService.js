// playlistService.js

const Playlist = require('../models/Playlist');

// Create a new playlist
exports.createPlaylist = async (playlistData) => {
    try {
        const playlist = new Playlist(playlistData);
        await playlist.save();
        return playlist;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get all playlists
exports.getAllPlaylists = async () => {
    try {
        const playlists = await Playlist.find();
        return playlists;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get a single playlist by ID
exports.getPlaylistById = async (playlistId) => {
    try {
        const playlist = await Playlist.findById(playlistId);
        return playlist;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Update a playlist by ID
exports.updatePlaylistById = async (playlistId, updatedData) => {
    try {
        const playlist = await Playlist.findByIdAndUpdate(playlistId, updatedData, { new: true });
        return playlist;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Delete a playlist by ID
exports.deletePlaylistById = async (playlistId) => {
    try {
        await Playlist.findByIdAndDelete(playlistId);
    } catch (err) {
        throw new Error(err.message);
    }
};
