const mongoose = require('mongoose')

const SubTitleSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})
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

const VideoSchema = new mongoose.Schema({
  subTitle: {
    type: SubTitleSchema,
    required: true,
  },
  title: {
    type: TitleSchema,
    required: true,
  },
  description: {
    type: DescriptionSchema,
    required: true,
  },
  photoLocation: {
    type: String,
  },
  videoLocationAz: {
    type: String,
  },
  youtubeLinkAz: {
    type: String,
  },
  videoLocationEng: {
    type: String,
  },
  youtubeLinkEng: {
    type: String,
  },
  videoLocationRu: {
    type: String,
  },
  youtubeLinkRu: {
    type: String,
  },
  showImage: {
    type: Boolean,
  },
  link: {
    type: TitleSchema,
  },
  pageType: {
    type: String,
  },
})

const Video = mongoose.model('Video', VideoSchema)

module.exports = { VideoSchema, Video }
