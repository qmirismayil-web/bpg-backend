const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION
});

const run = async () => {
    try {
        console.log('Listing buckets...');
        const buckets = await s3.listBuckets().promise();
        console.log('Buckets:', buckets.Buckets.map(b => b.Name));

        console.log('Listing objects in bpd-files...');
        const objects = await s3.listObjectsV2({ Bucket: 'bpd-files' }).promise();
        console.log('Files found:', objects.Contents.length);
        process.exit(0);
    } catch (err) {
        console.error('S3 error:', err);
        process.exit(1);
    }
};

run();
