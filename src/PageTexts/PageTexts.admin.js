const AdminBro = require('admin-bro')
const { PageTexts } = require('./PageTexts.entity')

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
    pageType: {
      name: 'pageType',
      label: 'Page Type',
      availableValues: [
        { value: 'personalDevCard', label: 'Personal development card' },
        { value: 'bussinesCunsultingCard', label: 'Bussines cunsulting card' },
        { value: 'joinOurFamilyCard', label: 'Join our family card' },
        { value: 'subscribeMagazine', label: 'Subscribe magazine' },
        { value: 'about', label: 'About page text' },
        { value: 'error', label: 'Error page text' },
        { value: 'success', label: 'Success page text' },
        { value: 'joinOurFamilyPage', label: 'Join our family page' },
        { value: 'joinOurFamilyHire', label: 'Join our family page card hire' },
        { value: 'joinOurFamilyWork', label: 'Join our family page card work' },
        { value: 'magazinePage', label: 'Magazine Page' },
        { value: 'magazinePageInfo', label: 'Magazine Page Information' },
        { value: 'personalDevPage', label: 'Personal development page' },
        { value: 'bussinesCunsultingPage', label: 'Bussines cunsulting page' },
        { value: 'getService', label: 'Get service' },
        { value: 'request', label: 'Request a call' },
      ],
    },
    photoLocation: {
      isVisible: false,
    },
    _id: {
      isVisible: false,
    },
    uploadImage: {
      components: {
        edit: AdminBro.bundle('../../admin/components/upload-image.edit.tsx'),
        list: AdminBro.bundle('../../admin/components/upload-image.list.tsx'),
      },
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
  resource: PageTexts,
}
