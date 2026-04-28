const mongoose = require('mongoose');
require('dotenv').config();

const run = async () => {
    try {
        console.log('Connecting to database...');
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB!');
        process.exit(0);
    } catch (err) {
        console.error('Connection error:', err);
        process.exit(1);
    }
};

run();
