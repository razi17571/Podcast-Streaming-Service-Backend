const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const podcastRoutes = require('./routes/podcastRoutes');
const episodeRoutes = require('./routes/episodeRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const { errorMiddleware } = require('./middleware/errorMiddleware');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/podcasts', podcastRoutes);
app.use('/api/episodes', episodeRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/playlists', playlistRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
