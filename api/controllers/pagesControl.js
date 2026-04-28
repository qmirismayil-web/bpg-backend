const { PageTexts } = require('../../src/PageTexts/PageTexts.entity')

module.exports.personalDevCard_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'personalDevCard' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.bussinesCunsultingCard_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'bussinesCunsultingCard' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.joinOurFamilyCard_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyCard' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.subscribeMagazine_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'subscribeMagazine' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.about_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'about' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.error_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'error' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.success_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'success' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.joinOurFamilyPage_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyPage' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.joinOurFamilyHire_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyHire' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.joinOurFamilyWork_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyWork' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.magazinePage_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'magazinePage' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.magazinePageInfo_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'magazinePageInfo' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.personalDevPage_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'personalDevPage' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.bussinesCunsultingPage_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'bussinesCunsultingPage' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.getService_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'getService' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
module.exports.request_get = async (req, res, next) => {
  let datum = await PageTexts.find({ pageType: 'request' })
  let data = datum[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
  res.json(data)
}
