// Episode.js

const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    audioFile: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    podcast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Episode', EpisodeSchema);
