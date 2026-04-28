const AdminBro = require('admin-bro');
const { ServiceForm } = require('./ServiceForm.entity');

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
   resource: ServiceForm
};