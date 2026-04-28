const AdminBro = require('admin-bro')
const { JournalCategories } = require('./JournalCategories.entity')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    _id: {
      isVisible: false,
    },
    O: {
      components: {
        list: AdminBro.bundle('../../admin/components/upload-csv.list.tsx'),
      },
    },
  },
}

module.exports = {
  options,
  resource: JournalCategories,
}
