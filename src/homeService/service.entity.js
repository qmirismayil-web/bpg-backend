const mongoose = require('mongoose')

const ServiceNameSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})

const ServiceSchema = new mongoose.Schema({
  service_name: {
    type: ServiceNameSchema,
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
})
const Service = mongoose.model('Service', ServiceSchema)

module.exports = { ServiceSchema, Service }
