const mongoose = require('mongoose')

const SubscribedEmailsSchema = new mongoose.Schema({
  email_or_phone: {
    type: String,
  },
})

const SubscribedEmails = mongoose.model(
  'SubscribedEmails',
  SubscribedEmailsSchema,
)

module.exports = { SubscribedEmailsSchema, SubscribedEmails }
