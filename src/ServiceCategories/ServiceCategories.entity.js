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

const ServiceCategoriesSchema = new mongoose.Schema({
   category: {
      type: CategorySchema,
      required: true,
   },
   subcategory: {
      type: [SubCategorySchema],
      required: true,
   }
});

const ServiceCategories = mongoose.model('ServiceCategories', ServiceCategoriesSchema);

module.exports = { ServiceCategoriesSchema, ServiceCategories };