const AdminBro = require('admin-bro')
const { JournalForm } = require('./JournalForm.entity')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    _id: {
      isVisible: false,
    },
  },
}

module.exports = {
  options,
  resource: JournalForm,
}
