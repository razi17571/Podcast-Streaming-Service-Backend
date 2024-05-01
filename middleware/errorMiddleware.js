// errorMiddleware.js

// Middleware for handling errors
exports.errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
};
