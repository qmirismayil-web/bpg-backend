const mongoose = require('mongoose')

const TitleSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})
const LocationSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})

const CareersSchema = new mongoose.Schema({
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
  cardType: {
    type: String,
    required: true,
  },
  location: {
    type: LocationSchema,
    required: true,
  },
  phone: {
    type: [String],
  },
})
const Careers = mongoose.model('Careers', CareersSchema)

module.exports = { CareersSchema, Careers }
