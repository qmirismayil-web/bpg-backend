const AdminBro = require('admin-bro');
const { Selects } = require('./Selects.entity');

/** @type {AdminBro.ResourceOptions} */
const options = {
   properties: {
      _id: {
         isVisible: false,
      },
      selectType: {
         name: 'selectType',
         label: 'selectType',
         availableValues: [
            { value: 'gender', label: 'Gender' },
            { value: 'entrepreneurship', label: 'Entrepreneurship criteria' },
            { value: 'workspace', label: 'Workspace' },
            { value: 'position', label: 'Position' },
            { value: 'marital', label: 'Marital status' },
            { value: 'subject', label: 'Recall subject' }
         ],
      },
   }
};

module.exports = {
   options,
   resource: Selects,
};