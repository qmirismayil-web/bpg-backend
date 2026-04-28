const AdminBro = require('admin-bro')
const { UploadFile } = require('../../src/S3')

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const {
    record,
    uploadImageAz,
    uploadImageEng,
    uploadImageRu,
    uploadBookAz,
    uploadBookEng,
    uploadBookRu,
  } = context

  if (record.isValid()) {
    try {
      if (uploadImageAz) {
        const result1 = await UploadFile(
          uploadImageAz,
          `journal-image-az-${record.id().toString()}`,
        )
        await record.update({ photoLocationAz: `/file/${result1.Key}` })
      }

      if (uploadImageEng) {
        const result5 = await UploadFile(
          uploadImageEng,
          `journal-image-eng-${record.id().toString()}`,
        )
        await record.update({ photoLocationEng: `/file/${result5.Key}` })
      }

      if (uploadImageRu) {
        const result6 = await UploadFile(
          uploadImageRu,
          `journal-image-ru-${record.id().toString()}`,
        )
        await record.update({ photoLocationRu: `/file/${result6.Key}` })
      }
      if (uploadBookAz) {
        const result2 = await UploadFile(
          uploadBookAz,
          `journal-az-${record.id().toString()}`,
        )
        await record.update({ journalLocationAz: `/file/${result2.Key}` })
      }

      if (uploadBookEng) {
        const result3 = await UploadFile(
          uploadBookEng,
          `journal-eng-${record.id().toString()}`,
        )
        await record.update({ journalLocationEng: `/file/${result3.Key}` })
      }
      if (uploadBookRu) {
        const result4 = await UploadFile(
          uploadBookRu,
          `journal-ru-${record.id().toString()}`,
        )
        await record.update({ journalLocationRu: `/file/${result4.Key}` })
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
      uploadImageAz,
      uploadImageEng,
      uploadImageRu,
      uploadBookAz,
      uploadBookEng,
      uploadBookRu,
      ...otherParams
    } = request.payload

    context.uploadImageAz = uploadImageAz
    context.uploadImageEng = uploadImageEng
    context.uploadImageRu = uploadImageRu
    context.uploadBookAz = uploadBookAz
    context.uploadBookEng = uploadBookEng
    context.uploadBookRu = uploadBookRu

    return {
      ...request,
      payload: otherParams,
    }
  }
  return request
}

module.exports = { after, before }
