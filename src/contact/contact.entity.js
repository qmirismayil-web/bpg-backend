const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});
const WorkingHoursSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});

const ContactSchema = new mongoose.Schema({
   location: {
      type: [LocationSchema],
      required: true,
   },
   working_hours: {
      type: WorkingHoursSchema,
      required: true,
   },
   phone: {
      type: [String],
   },
   email: {
      type: [String]
   },
   callCentre: {
      type: String
   },
   facebook_link: {
      type: String
   },
   linkedin_link: {
      type: String
   },
   youtube_link: {
      type: String
   },
   instagram_link: {
      type: String
   },
   whatsapp_link: {
      type: String
   }
});
const Contact = mongoose.model('Contact', ContactSchema);

module.exports = { ContactSchema, Contact };