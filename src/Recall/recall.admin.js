const AdminBro = require('admin-bro')
const { Recall } = require('./recall.entity')

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
  resource: Recall,
}
