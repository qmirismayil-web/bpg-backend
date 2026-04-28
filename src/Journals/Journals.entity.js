const mongoose = require('mongoose');

const TitleSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});

const JournalsSchema = new mongoose.Schema({
   title: {
      type: TitleSchema,
      required: true,
   },
   photoLocationAz: {
      type: String,
   },
   photoLocationEng: {
      type: String,
   },
   photoLocationRu: {
      type: String,
   },
   journalLocationAz: {
      type: String,
   },
   journalLocationEng: {
      type: String,
   },
   journalLocationRu: {
      type: String,
   },
   popular: {
      type: Boolean
   }
});
const Journals = mongoose.model('Journals', JournalsSchema);

module.exports = { JournalsSchema, Journals };