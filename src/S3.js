const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
require('dotenv').config()
const crypto = require('crypto')
const { promisify } = require('util')
const randomBytes = promisify(crypto.randomBytes)

const bucket_name = process.env.AWS_BUCKET_NAME
const bucket_region = process.env.AWS_BUCKET_REGION
const bucket_access_key = process.env.AWS_ACCESS_KEY_ID
const bucket_secret_key = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3({
  apiVersion: '2010-12-01',
  region: bucket_region,
  accessKeyId: bucket_access_key,
  accessSecretKey: bucket_secret_key,
  signatureVersion: 'v4',
})

// function to upload file

function UploadFile(file, id, path) {
  const fileStream = path ? path : fs.createReadStream(file.path)
  const uploadParams = {
    Bucket: bucket_name,
    Body: fileStream,
    Key: `${id}-${file.name}`,
  }
  return s3.upload(uploadParams).promise()
}
exports.UploadFile = UploadFile

// front generate url

async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = {
    Bucket: bucket_name,
    Key: imageName,
    Expires: 60,
  }

  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}

exports.generateUploadURL = generateUploadURL
// getting files

function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucket_name,
  }

  return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream
