const mongoose = require('mongoose')

const NameSchema = mongoose.Schema({
  AZ: String,
  ENG: String,
  RU: String,
})

const CurrencySchema = new mongoose.Schema({
  currency: {
    type: NameSchema,
  },
  code: {
    type: String,
  },
  rate: {
    type: String,
  },
  sign: {
    type: String,
  },
})
const Currency = mongoose.model('Currency', CurrencySchema)

module.exports = { CurrencySchema, Currency }
