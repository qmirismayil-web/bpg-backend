const mongoose = require('mongoose')

const Home_CurrencySchema = new mongoose.Schema({
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
const Home_Currency = mongoose.model('Home_Currency', Home_CurrencySchema)

module.exports = { Home_CurrencySchema, Home_Currency }
