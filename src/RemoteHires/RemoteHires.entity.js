const mongoose = require('mongoose')

const WorkPlaceSchema = mongoose.Schema({
  factualWorkplace: String,
  legalWorkplace: String,
  entrepreneurshipCriteria: String,
  voen: String,
  activityCode: String,
  experience_of_company: String,
  factualAddress: String,
  legalAddress: String,
})

const RemoteHiresSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  birth: {
    type: String,
  },
  email: {
    type: String,
  },
  phones: {
    type: [String],
  },
  workPlace: {
    type: WorkPlaceSchema,
  },
  note: {
    type: String,
  },
  options: {
    type: [String],
  },
})

const RemoteHires = mongoose.model('RemoteHires', RemoteHiresSchema)

module.exports = { RemoteHiresSchema, RemoteHires }
