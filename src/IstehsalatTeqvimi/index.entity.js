const mongoose = require('mongoose')

const IstehsalatTeqvimiSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  holidays: {
    type: [String],
  },
})

const IstehsalatTeqvimi = mongoose.model(
  'IstehsalatTeqvimi',
  IstehsalatTeqvimiSchema,
)

module.exports = { IstehsalatTeqvimiSchema, IstehsalatTeqvimi }
