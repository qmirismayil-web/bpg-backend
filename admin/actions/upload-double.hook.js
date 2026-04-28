const AdminBro = require('admin-bro')
const { UploadFile } = require('../../src/S3')

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, uploadProfileImage, uploadBigImage } = context

  if (record.isValid()) {
    try {
      if (uploadProfileImage) {
        const result1 = await UploadFile(
          uploadProfileImage,
          `${record.id().toString()}`,
        )
        await record.update({ photoLocation: `/file/${result1.Key}` })
      }

      if (uploadBigImage) {
        const result2 = await UploadFile(
          uploadBigImage,
          `${record.id().toString()}`,
        )
        await record.update({ bigPhoto: `/file/${result2.Key}` })
      }
    } catch (err) {
      console.error(err)
    }
  }
  return response
}

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  if (request.method === 'post') {
    const {
      uploadProfileImage,
      uploadBigImage,
      ...otherParams
    } = request.payload

    context.uploadProfileImage = uploadProfileImage
    context.uploadBigImage = uploadBigImage

    return {
      ...request,
      payload: otherParams,
    }
  }
  return request
}

module.exports = { after, before }
