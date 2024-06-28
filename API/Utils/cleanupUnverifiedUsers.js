// utils/cleanupUnverifiedUsers.js

const cron = require('node-cron');
const User = require('../models/user_model');

function cleanupUnverifiedUsers() {
    // Schedule the job to run every hour
    cron.schedule('0 * * * *', async () => {
        try {
            const oneHourAgo = new Date(Date.now() - 3600 * 1000);
            await User.deleteMany({ verified: false, createdAt: { $lt: oneHourAgo } });
            console.log('Deleted unverified users older than 1 hour');
        } catch (error) {
            console.error('Error deleting unverified users:', error);
        }
    });
}

module.exports = cleanupUnverifiedUsers;
