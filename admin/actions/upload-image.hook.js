const AdminBro = require('admin-bro')
const { UploadFile } = require('../../src/S3')

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, uploadImage } = context

  if (record.isValid()) {
    try {
      if (uploadImage) {
        const result = await UploadFile(uploadImage, record.id().toString())
        await record.update({ photoLocation: `/file/${result.Key}` })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return response
}

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  if (request.method === 'post') {
    const { uploadImage, ...otherParams } = request.payload

    context.uploadImage = uploadImage

    return {
      ...request,
      payload: otherParams,
    }
  }
  return request
}

module.exports = { after, before }
