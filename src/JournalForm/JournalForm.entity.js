const mongoose = require('mongoose')

const EducationSchema = mongoose.Schema({
  university: String,
  faculty: String,
  language: String,
  graduationYear: String,
})
const ExperienceSchema = mongoose.Schema({
  position: String,
  generalExperience: String,
  fieldExperience: String,
})

const JournalFormSchema = new mongoose.Schema({
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
  marital_status: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  education: {
    type: EducationSchema,
  },
  experience: {
    type: ExperienceSchema,
  },
  note: {
    type: String,
  },
  options: {
    type: [String],
  },
})

const JournalForm = mongoose.model('JournalForm', JournalFormSchema)

module.exports = { JournalFormSchema, JournalForm }
