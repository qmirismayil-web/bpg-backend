const AdminBro = require('admin-bro');
const { PagesTerm } = require('./PagesTerm.entity');


/** @type {AdminBro.ResourceOptions} */
const options = {
   properties: {
      _id: {
         isVisible: false,
      },
      pageType: {
         name: 'pageType',
         label: 'Page Type',
         availableValues: [
            { value: 'notices', label: 'Legal notices' },
            { value: 'privacy', label: 'Privacy' },
            { value: 'policy', label: 'Cookie policy' },
            { value: 'terms', label: 'Term and conditions' },
            { value: 'disclaimer', label: 'Legal disclaimer' }
         ],
      },
   }
};

module.exports = {
   options,
   resource: PagesTerm
};