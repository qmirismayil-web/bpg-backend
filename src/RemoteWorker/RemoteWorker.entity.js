const mongoose = require('mongoose')

const EducationSchema = mongoose.Schema({
  university: String,
  faculty: String,
  language: String,
  graduationYear: String,
})
const FiedlsToWorkSchema = mongoose.Schema({
  workplace: String,
  industry1: String,
  industry2: String,
  note: String,
})
const LanguageSkillsSchema = mongoose.Schema({
  language: String,
  Reading: String,
  Writing: String,
  Speaking: String,
  Listening: String,
})
const ExperienceSchema = mongoose.Schema({
  company: String,
  position: String,
  generalExperience: String,
  fieldExperience: String,
})

const RemoteWorkerSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  birth: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone1: {
    type: String,
  },
  phone2: {
    type: String,
  },
  address: {
    type: String,
  },
  education: {
    type: [EducationSchema],
  },
  languageSkills: {
    type: [LanguageSkillsSchema],
  },
  experience: {
    type: ExperienceSchema,
  },
  photoLocation: {
    type: String,
  },
  resumeLocation: {
    type: String,
  },
  note: {
    type: String,
  },
  options: {
    type: [String],
  },
  fiedlsToWork: {
    type: [FiedlsToWorkSchema],
  },
})

const RemoteWorker = mongoose.model('RemoteWorker', RemoteWorkerSchema)

module.exports = { RemoteWorkerSchema, RemoteWorker }
