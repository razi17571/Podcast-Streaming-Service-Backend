# Podcast Streaming Service with Node.js and Express.js

This is a podcast streaming service backend built using Node.js and Express.js. It provides RESTful APIs for managing podcasts, episodes, user authentication, subscriptions, and playlists.

## Features

- User Authentication (Register, Login)
- Podcast Management (Create, Read, Update, Delete)
- Episode Management (Create, Read, Update, Delete)
- Subscription Management (Subscribe, Unsubscribe)
- Playlist Management (Create, Read, Update, Delete)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- MongoDB installed and running
- Basic understanding of JavaScript and Express.js framework

## Installation

1. Clone the repository:

```
https://github.com/razi17571/Podcast-Streaming-Service-Backend.git
```

2. Navigate to the project directory:

```
cd Podcast-Streaming-Service-Backend
```

3. Install dependencies:

```
npm install
```

4. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_jwt_secret_here
```

Replace `your_mongodb_uri_here` with your actual MongoDB connection URI and `your_jwt_secret_here` with a secret key for JWT token generation.

5. Start the server:

```bash
node app.js
```

## Usage

- Register a new user: Send a POST request to `/api/auth/register` with username, email, and password in the request body.
- Login: Send a POST request to `/api/auth/login` with email and password in the request body to receive a JWT token.
- Explore other API endpoints for managing podcasts, episodes, subscriptions, and playlists.

## API Documentation
1. **Authentication (authRoutes)**:
   - Register: `POST /api/auth/register`
   - Login: `POST /api/auth/login`

2. **Podcasts (podcastRoutes)**:
   - Create Podcast: `POST /api/podcasts`
   - Get all Podcasts: `GET /api/podcasts`
   - Get a Podcast by ID: `GET /api/podcasts/:id`
   - Update Podcast by ID: `PUT /api/podcasts/:id`
   - Delete Podcast by ID: `DELETE /api/podcasts/:id`

3. **Episodes (episodeRoutes)**:
   - Create Episode: `POST /api/episodes/:podcastId`
   - Get all Episodes of a Podcast: `GET /api/episodes/:podcastId`
   - Get an Episode by ID: `GET /api/episodes/episode/:id`
   - Update Episode by ID: `PUT /api/episodes/:id`
   - Delete Episode by ID: `DELETE /api/episodes/:id`

4. **Subscriptions (subscriptionRoutes)**:
   - Subscribe: `POST /api/subscriptions/subscribe`
   - Unsubscribe: `DELETE /api/subscriptions/unsubscribe`

5. **Playlists (playlistRoutes)**:
   - Create Playlist: `POST /api/playlists`
   - Get all Playlists of a User: `GET /api/playlists`
   - Get a Playlist by ID: `GET /api/playlists/:id`
   - Update Playlist by ID: `PUT /api/playlists/:id`
   - Delete Playlist by ID: `DELETE /api/playlists/:id`

For each endpoint, you would send the specified method of request (e.g., POST, GET, PUT, DELETE) to the corresponding URL path to interact with your API.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or create a pull request.


