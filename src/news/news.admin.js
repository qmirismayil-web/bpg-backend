const AdminBro = require('admin-bro')
const { News } = require('./news.entity')
const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('../../admin/actions/password.hook')

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('../../admin/actions/upload-image.hook')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    newsType: {
      name: 'newsType',
      label: 'News Type',
      availableValues: [
        { value: 'news', label: 'News' },
        { value: 'article', label: 'Article' },
        { value: 'post', label: 'Post Event' },
        { value: 'telim', label: 'Telim ve Seminarlar' },
      ],
    },
    photoLocation: {
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
    uploadImage: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-image.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-image.list.tsx'),
      },
    },
  },
  actions: {
    new: {
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(
          response,
          request,
          context,
        )
        return uploadAfterHook(modifiedResponse, request, context)
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context)
        return uploadBeforeHook(modifiedRequest, context)
      },
    },
    edit: {
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(
          response,
          request,
          context,
        )
        return uploadAfterHook(modifiedResponse, request, context)
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context)
        return uploadBeforeHook(modifiedRequest, context)
      },
    },
    show: {
      isVisible: false,
    },
  },
}

module.exports = {
  options,
  resource: News,
}
