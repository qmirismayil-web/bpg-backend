const mongoose = require('mongoose');

const TitleSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});
const TermsSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});

const PagesTermSchema = new mongoose.Schema({
   title: {
      type: TitleSchema
   },
   term: {
      type: [TermsSchema]
   },
   pageType: {
      type: String
   }
});

const PagesTerm = mongoose.model('PagesTerm', PagesTermSchema);

module.exports = { PagesTermSchema, PagesTerm };