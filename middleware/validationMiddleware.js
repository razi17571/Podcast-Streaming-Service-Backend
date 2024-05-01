// validationMiddleware.js

// Middleware for request validation
exports.validationMiddleware = (req, res, next) => {
    // Perform request validation here

    // For example, you can validate if required fields are present in the request body
    const { title, description, audioFile, releaseDate } = req.body;
    if (!title || !description || !audioFile || !releaseDate) {
        return res.status(400).json({ msg: 'Missing required fields' });
    }

    next();
};
