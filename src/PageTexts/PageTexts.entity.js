const mongoose = require('mongoose')

const TitleSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})

const PageTextsSchema = new mongoose.Schema({
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
  pageType: {
    type: String,
    required: true,
  },
})
const PageTexts = mongoose.model('PageTexts', PageTextsSchema)

module.exports = { PageTextsSchema, PageTexts }
