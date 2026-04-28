const AdminBro = require('admin-bro');
const { RemoteHires } = require('./RemoteHires.entity');

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
   resource: RemoteHires
};