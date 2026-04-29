const mongoose = require('mongoose');
const argon2 = require('argon2');
require('dotenv').config();

async function updateAdminPassword() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');
    const db = mongoose.connection.db;
    const collection = db.collection('companies');
    
    const email = 'bpd.companyy@gmail.com';
    const plainPassword = 'bpd-company-13';
    
    const encryptedPassword = await argon2.hash(plainPassword);
    
    const result = await collection.updateOne(
      { email: email },
      { $set: { encryptedPassword: encryptedPassword, email: email, companyName: 'BPD Admin' } },
      { upsert: true }
    );
    
    console.log('Password updated successfully. Result:', result.modifiedCount || result.upsertedCount);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

updateAdminPassword();
