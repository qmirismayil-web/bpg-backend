const AdminBro = require('admin-bro');
const { NewsCategories } = require('./NewsCategories.entity');


/** @type {AdminBro.ResourceOptions} */
const options = {
   properties: {
      _id: {
         isVisible: false,
      }
   }
};

module.exports = {
   options,
   resource: NewsCategories
};