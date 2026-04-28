const AdminBro = require('admin-bro');
const { SubscribedEmails } = require('./subscribe.entity');

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
   resource: SubscribedEmails
};