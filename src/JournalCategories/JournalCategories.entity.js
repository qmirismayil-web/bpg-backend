const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});
const SubCategorySchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});

const JournalCategoriesSchema = new mongoose.Schema({
   category: {
      type: CategorySchema,
      required: true,
   },
   subcategory: {
      type: [SubCategorySchema],
      required: true,
   }
});

const JournalCategories = mongoose.model('JournalCategories', JournalCategoriesSchema);

module.exports = { JournalCategoriesSchema, JournalCategories };