const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});

const SelectsSchema = new mongoose.Schema({
   categories: {
      type: [CategorySchema],
      required: true,
   },
   selectType: {
      type: String,
      required: true
   }
});

const Selects = mongoose.model('Selects', SelectsSchema);

module.exports = { SelectsSchema, Selects };