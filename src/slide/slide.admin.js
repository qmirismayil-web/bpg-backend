const AdminBro = require('admin-bro')
const { Slide } = require('./slide.entity')

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('../../admin/actions/password.hook')

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('../../admin/actions/upload-slide.hook')

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    pageType: {
      name: 'pageType',
      label: 'Page Type',
      availableValues: [
        { value: 'news', label: 'News' },
        { value: 'careers', label: 'Careers' },
        { value: 'services', label: 'Services' },
        { value: 'journal', label: 'Journal' },
        { value: 'personal', label: 'Personal Development' },
        { value: 'bussines', label: 'Bussines Cunsulting' },
        { value: 'join', label: 'Join our family' },
        { value: 'team', label: 'Home page team section' },
        { value: 'about', label: 'About us' },
      ],
    },
    title_color: {
      name: 'title_color',
      label: 'Title Color',
      availableValues: [
        { value: '#ffffff', label: 'White' },
        { value: '#000000', label: 'Black' },
        { value: '#E1BC23', label: 'Yellow' },
        { value: '#3E6DB5', label: 'Blue' },
      ],
    },
    description_color: {
      name: 'description_color',
      label: 'Description Color',
      availableValues: [
        { value: '#ffffff', label: 'White' },
        { value: '#000000', label: 'Black' },
        { value: '#E1BC23', label: 'Yellow' },
        { value: '#3E6DB5', label: 'Blue' },
      ],
    },
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
    photoLocation: {
      isVisible: false,
    },
    mobileLocation: {
      isVisible: false,
    },
    uploadImage: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-image.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-image.list.tsx'),
      },
    },
    uploadMobileImage: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-image2.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-image2.list.tsx'),
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
  resource: Slide,
}
