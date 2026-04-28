const mongoose = require('mongoose');

const srv_url = "mongodb+srv://bpd-company:bpd-company-13@cluster0.sx8ii.mongodb.net/bpd?retryWrites=true&w=majority";

const run = async () => {
    try {
        console.log('Testing SRV connection...');
        await mongoose.connect(srv_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log('SRV Connection Success!');
        process.exit(0);
    } catch (err) {
        console.error('SRV Connection Failed:', err.message);
        process.exit(1);
    }
};

run();
