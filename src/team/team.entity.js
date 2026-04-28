const mongoose = require('mongoose');


const FullnameSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});
const DescriptionSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});
const ProfessionSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});

const TeamSchema = new mongoose.Schema({
   fullname: {
      type: FullnameSchema,
      required: true,
   },
   profession: {
      type: ProfessionSchema,
      required: true,
   },
   description: {
      type: DescriptionSchema,
      required: true,
   },
   photoLocation: {
      type: String,
   }
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = { TeamSchema, Team };