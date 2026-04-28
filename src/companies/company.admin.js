const AdminBro = require('admin-bro');
const { Company } = require('./company.entity');

const {
   after: passwordAfterHook,
   before: passwordBeforeHook,
} = require('../../admin/actions/password.hook');

const {
   after: uploadAfterHook,
   before: uploadBeforeHook,
} = require('../../admin/actions/upload-image.hook');

/** @type {AdminBro.ResourceOptions} */
const options = {
   properties: {
      encryptedPassword: {
         isVisible: false,
      },
      _id: {
         isVisible: false,
      },
      photoLocation: {
         isVisible: false,
      },
      password: {
         type: 'password',
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
            const modifiedResponse = await passwordAfterHook(response, request, context);
            return uploadAfterHook(modifiedResponse, request, context);
         },
         before: async (request, context) => {
            const modifiedRequest = await passwordBeforeHook(request, context);
            return uploadBeforeHook(modifiedRequest, context);
         },
      },
      edit: {
         after: async (response, request, context) => {
            const modifiedResponse = await passwordAfterHook(response, request, context);
            return uploadAfterHook(modifiedResponse, request, context);
         },
         before: async (request, context) => {
            const modifiedRequest = await passwordBeforeHook(request, context);
            return uploadBeforeHook(modifiedRequest, context);
         },
      },
      show: {
         isVisible: false,
      },
      delete: {
         isVisible: false,
         isAccessible: false
      },
      bulkDelete: {
         isVisible: false
      }
   },
};

module.exports = {
   options,
   resource: Company,
};