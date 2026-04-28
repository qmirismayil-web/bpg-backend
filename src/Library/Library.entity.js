const mongoose = require('mongoose')

const TitleSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})

const LibrarySchema = new mongoose.Schema({
  title: {
    type: TitleSchema,
    required: true,
  },
  photoLocationAz: {
    type: String,
  },
  photoLocationEng: {
    type: String,
  },
  photoLocationRu: {
    type: String,
  },
  journalLocationAz: {
    type: String,
  },
  journalLocationEng: {
    type: String,
  },
  journalLocationRu: {
    type: String,
  },
  popular: {
    type: Boolean,
  },
  dowloads: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  edition: {
    type: Number,
  },
  recommended: {
    type: Boolean,
  },
})
const Library = mongoose.model('Library', LibrarySchema)

module.exports = { LibrarySchema, Library }
