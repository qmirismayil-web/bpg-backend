const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});
const SubCategoriesSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
   value: String
});

const NewsCategoriesSchema = new mongoose.Schema({
   category: {
      type: CategorySchema,
      required: true,
   },
   subcategories: {
      type: [SubCategoriesSchema],
      required: true,
   },
   value: {
      type: String,
      required: true
   }
});
const NewsCategories = mongoose.model('NewsCategories', NewsCategoriesSchema);

module.exports = { NewsCategoriesSchema, NewsCategories };