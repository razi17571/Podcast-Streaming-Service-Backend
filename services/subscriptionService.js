// subscriptionService.js

const Subscription = require('../models/Subscription');

// Subscribe to a podcast
exports.subscribeToPodcast = async (subscriptionData) => {
    try {
        const subscription = new Subscription(subscriptionData);
        await subscription.save();
        return subscription;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Unsubscribe from a podcast
exports.unsubscribeFromPodcast = async (userId, podcastId) => {
    try {
        await Subscription.findOneAndDelete({ user: userId, podcast: podcastId });
    } catch (err) {
        throw new Error(err.message);
    }
};