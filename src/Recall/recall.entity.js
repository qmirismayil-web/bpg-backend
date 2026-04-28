const mongoose = require('mongoose')

const RecallSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  subject: {
    type: String,
  },
  contact_info: {
    type: String,
  },
})
const Recall = mongoose.model('Recall', RecallSchema)

module.exports = { RecallSchema, Recall }
