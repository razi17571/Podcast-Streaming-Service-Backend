// subscriptionController.js

const Subscription = require('../models/Subscription');

// Subscribe to a podcast
exports.subscribeToPodcast = async (req, res) => {
    try {
        const { podcastId } = req.body;
        const userId = req.user.id; // Assuming user ID is included in the request after authentication

        // Check if user is already subscribed
        const existingSubscription = await Subscription.findOne({ user: userId, podcast: podcastId });
        if (existingSubscription) {
            return res.status(400).json({ msg: 'User already subscribed to this podcast' });
        }

        const subscription = new Subscription({
            user: userId,
            podcast: podcastId
        });

        await subscription.save();

        res.status(201).json(subscription);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Unsubscribe from a podcast
exports.unsubscribeFromPodcast = async (req, res) => {
    try {
        const { podcastId } = req.body;
        const userId = req.user.id; // Assuming user ID is included in the request after authentication

        await Subscription.findOneAndDelete({ user: userId, podcast: podcastId });

        res.json({ msg: 'Unsubscribed successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
