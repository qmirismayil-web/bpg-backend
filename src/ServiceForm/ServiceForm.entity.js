const mongoose = require('mongoose')

const WorkPlaceSchema = mongoose.Schema({
  factualWorkplace: String,
  legalWorkplace: String,
  entrepreneurshipCriteria: String,
  voen: String,
  activityCode: String,
  factualAddress: String,
  legalAddress: String,
})

const ServiceFormSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  birth: {
    type: String,
  },
  email: {
    type: String,
  },
  phone1: {
    type: String,
  },
  phone2: {
    type: String,
  },
  workPlace: {
    type: [WorkPlaceSchema],
  },
  note: {
    type: String,
  },
  options: {
    type: [String],
  },
})

const ServiceForm = mongoose.model('ServiceForm', ServiceFormSchema)

module.exports = { ServiceFormSchema, ServiceForm }
