const AdminBro = require('admin-bro')
const { Video } = require('./video.entity')

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('../../admin/actions/password.hook')

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('../../admin/actions/upload-both.hook.js')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    photoLocation: {
      isVisible: false,
    },
    videoLocationAz: {
      isVisible: false,
    },
    videoLocationEng: {
      isVisible: false,
    },
    videoLocationRu: {
      isVisible: false,
    },
    _id: {
      isVisible: false,
    },
    pageType: {
      name: 'pageType',
      label: 'Page Type',
      availableValues: [
        { value: 'home', label: 'Home page' },
        { value: 'about', label: 'About page' },
      ],
    },
    uploadImage: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-image.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-image.list.tsx'),
      },
    },
    uploadVideoAz: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-video1.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-video1.list.tsx'),
      },
    },
    uploadVideoEng: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-video2.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-video2.list.tsx'),
      },
    },
    uploadVideoRu: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-video3.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-video3.list.tsx'),
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
  resource: Video,
}
