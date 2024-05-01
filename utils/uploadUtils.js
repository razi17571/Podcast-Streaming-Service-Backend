// uploadUtils.js
const multer = require('multer');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for storing uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // File naming strategy (timestamp + original name)
    }
});

// File filter to accept only certain file types
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('audio/')) {
        cb(null, true); // Accept audio files
    } else {
        cb(new Error('File type not supported'), false); // Reject other file types
    }
};

// Multer instance with configuration
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 10 // Limit file size to 10MB
    }
});

module.exports = upload;
