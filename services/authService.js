// authService.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const User = require('../models/User');

// Authenticate user
exports.authenticateUser = async (email, password) => {
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid credentials');
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
        return token;
    } catch (err) {
        throw new Error(err.message);
    }
};
