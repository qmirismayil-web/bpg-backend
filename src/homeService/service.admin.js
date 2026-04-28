const AdminBro = require('admin-bro')
const { Service } = require('./service.entity')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    _id: {
      isVisible: false,
    },
    description_az: {
      type: 'richtext',
    },
    description_eng: {
      type: 'richtext',
    },
    description_ru: {
      type: 'richtext',
    },
  },
}

module.exports = {
  options,
  resource: Service,
}
