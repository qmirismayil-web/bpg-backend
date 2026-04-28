const mongoose = require('mongoose')

const EducationSchema = mongoose.Schema({
  university: String,
  faculty: String,
  language: String,
  graduationYear: String,
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

const VacancyAppliesSchema = new mongoose.Schema({
  vacancy_id: {
    type: String,
  },
  vacancy_name: {
    type: String,
  },
  fullname: {
    type: String,
  },
  birth: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone: {
    type: [String],
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
  date: {
    type: Date,
    default: Date.now,
  },
})

const VacancyApplies = mongoose.model('VacancyApplies', VacancyAppliesSchema)

module.exports = { VacancyAppliesSchema, VacancyApplies }
