const AdminBro = require('admin-bro')
const { Journals } = require('./Journals.entity')

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('../../admin/actions/password.hook')

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('../../admin/actions/upload-journals.hook')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    photoLocationAz: {
      isVisible: false,
    },
    photoLocationEng: {
      isVisible: false,
    },
    photoLocationRu: {
      isVisible: false,
    },
    journalLocationAz: {
      isVisible: false,
    },
    journalLocationEng: {
      isVisible: false,
    },
    journalLocationRu: {
      isVisible: false,
    },
    uploadImageAz: {
      components: {
        edit: AdminBro.bundle(
          '../../admin/components/upload-journal-az.edit.tsx',
        ),
        list: AdminBro.bundle(
          '../../admin/components/upload-image.list-az.tsx',
        ),
      },
    },
    uploadImageEng: {
      components: {
        edit: AdminBro.bundle(
          '../../admin/components/upload-journal-eng.edit.tsx',
        ),
        list: AdminBro.bundle(
          '../../admin/components/upload-image.list-eng.tsx',
        ),
      },
    },
    uploadImageRu: {
      components: {
        edit: AdminBro.bundle(
          '../../admin/components/upload-journal-ru.edit.tsx',
        ),
        list: AdminBro.bundle(
          '../../admin/components/upload-image.list-ru.tsx',
        ),
      },
    },
    uploadJournalAz: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-book-az.edit.tsx'),
      },
      isVisible: { list: false, filter: false, show: true, edit: true },
    },
    uploadJournalEng: {
      components: {
        edit: AdminBro.bundle(
          '../../admin/components/upload-book-eng.edit.tsx',
        ),
      },
      isVisible: { list: false, filter: false, show: true, edit: true },
    },
    uploadJournalRu: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-book-ru.edit.tsx'),
      },
      isVisible: { list: false, filter: false, show: true, edit: true },
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
  resource: Journals,
}
