const mongoose = require('mongoose')

const TitleSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})
const DescriptionSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})

const SlideSchema = new mongoose.Schema({
  title: {
    type: TitleSchema,
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
  mobileLocation: {
    type: String,
  },
  pageType: {
    type: String,
    required: true,
  },
  DontShowButton: {
    type: Boolean,
    default: false,
  },
  isVideo: {
    type: Boolean,
    default: false,
  },
  title_color: {
    type: String,
  },
  description_color: {
    type: String,
  },
  title_bg: {
    type: Boolean,
  },
  description_bg: {
    type: Boolean,
  },
  seconds: {
    type: Number,
  },
})

const Slide = mongoose.model('Slide', SlideSchema)

module.exports = { SlideSchema, Slide }
