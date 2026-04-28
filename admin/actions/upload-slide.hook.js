const AdminBro = require('admin-bro')
const { UploadFile } = require('../../src/S3')

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, uploadImage, uploadMobileImage } = context

  if (record.isValid()) {
    try {
      if (uploadImage) {
        const result = await UploadFile(uploadImage, record.id().toString())
        await record.update({ photoLocation: `/file/${result.Key}` })
      }

      if (uploadMobileImage) {
        const result2 = await UploadFile(
          uploadMobileImage,
          record.id().toString(),
        )
        await record.update({ mobileLocation: `/file/${result2.Key}` })
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
    const { uploadImage, uploadMobileImage, ...otherParams } = request.payload

    context.uploadImage = uploadImage
    context.uploadMobileImage = uploadMobileImage

    return {
      ...request,
      payload: otherParams,
    }
  }
  return request
}

module.exports = { after, before }
