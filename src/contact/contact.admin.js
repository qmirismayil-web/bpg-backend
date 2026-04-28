const AdminBro = require('admin-bro');
const { Contact } = require('./contact.entity');


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
   resource: Contact
};