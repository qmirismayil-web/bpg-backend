const mongoose = require('mongoose')

const TitleSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})

const NewsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: TitleSchema,
    required: true,
  },
  description_az: {
    type: String,
  },
  description_eng: {
    type: String,
  },
  description_ru: {
    type: String,
  },
  photoLocation: {
    type: String,
  },
  newsType: {
    type: String,
    required: true,
  },
  newsCategory: {
    type: String,
    required: true,
  },
  newsSubcategory: {
    type: [String],
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  showInHome: {
    type: Boolean,
  },
})
const News = mongoose.model('News', NewsSchema)

module.exports = { NewsSchema, News }
