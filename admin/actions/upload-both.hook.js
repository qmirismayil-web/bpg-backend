const AdminBro = require('admin-bro')
const { UploadFile } = require('../../src/S3')

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const {
    record,
    uploadImage,
    uploadVideoAz,
    uploadVideoEng,
    uploadVideoRu,
  } = context

  if (record.isValid()) {
    try {
      if (uploadImage) {
        const result1 = await UploadFile(
          uploadImage,
          `${record.id().toString()}`,
        )
        await record.update({ photoLocation: `/file/${result1.Key}` })
      }
      if (uploadVideoAz) {
        const result2 = await UploadFile(
          uploadVideoAz,
          `${record.id().toString()}`,
        )
        await record.update({ videoLocationAz: `/file/${result2.Key}` })
      }
      if (uploadVideoEng) {
        const result3 = await UploadFile(
          uploadVideoEng,
          `${record.id().toString()}`,
        )

        await record.update({ videoLocationEng: `/file/${result3.Key}` })
      }
      if (uploadVideoRu) {
        const result4 = await UploadFile(
          uploadVideoRu,
          `${record.id().toString()}`,
        )

        await record.update({ videoLocationRu: `/file/${result4.Key}` })
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
      uploadImage,
      uploadVideoAz,
      uploadVideoEng,
      uploadVideoRu,
      ...otherParams
    } = request.payload

    context.uploadImage = uploadImage
    context.uploadVideoAz = uploadVideoAz
    context.uploadVideoEng = uploadVideoEng
    context.uploadVideoRu = uploadVideoRu

    return {
      ...request,
      payload: otherParams,
    }
  }
  return request
}

module.exports = { after, before }
