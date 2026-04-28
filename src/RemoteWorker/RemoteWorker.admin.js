const AdminBro = require('admin-bro')
const { RemoteWorker } = require('./RemoteWorker.entity')

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
    _id: {
      isVisible: false,
    },
    photoLocation: {
      isVisible: false,
    },
    resumeLocation: {
      isVisible: false,
    },
    Image: {
      components: {
        list: AdminBro.bundle('../../admin/components/image.list.tsx'),
      },
    },
    Resume: {
      components: {
        list: AdminBro.bundle('../../admin/components/resume.list.tsx'),
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
  resource: RemoteWorker,
}
