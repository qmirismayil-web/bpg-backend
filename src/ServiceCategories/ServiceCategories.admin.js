const AdminBro = require('admin-bro');
const { ServiceCategories } = require('./ServiceCategories.entity');

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
   resource: ServiceCategories,
};