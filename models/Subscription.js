// models/Subscription.js

const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
