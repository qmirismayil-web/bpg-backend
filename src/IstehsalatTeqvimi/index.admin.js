const AdminBro = require('admin-bro')
const { IstehsalatTeqvimi } = require('./index.entity')

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
  resource: IstehsalatTeqvimi,
}
