const AdminBro = require('admin-bro')
const { Home_Currency } = require('./index.entity')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    _id: {
      isVisible: false,
    },
    sign: {
      name: 'sign',
      label: 'sign',
      availableValues: [
        { value: 'up', label: 'Up' },
        { value: 'down', label: 'Down' },
        { value: 'dot', label: 'Dot' },
      ],
    },
  },
}

module.exports = {
  options,
  resource: Home_Currency,
}
