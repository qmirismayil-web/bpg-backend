// Final test to force Git to see changes
const { PageTexts } = require('../../src/PageTexts/PageTexts.entity')

const wrap = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports.personalDevCard_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'personalDevCard' })
  res.json(datum[0] || {})
})

module.exports.bussinesCunsultingCard_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'bussinesCunsultingCard' })
  res.json(datum[0] || {})
})

module.exports.joinOurFamilyCard_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyCard' })
  res.json(datum[0] || {})
})

module.exports.subscribeMagazine_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'subscribeMagazine' })
  res.json(datum[0] || {})
})

module.exports.about_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'about' })
  res.json(datum[0] || {})
})

module.exports.error_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'error' })
  res.json(datum[0] || {})
})

module.exports.success_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'success' })
  res.json(datum[0] || {})
})

module.exports.joinOurFamilyPage_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyPage' })
  res.json(datum[0] || {})
})

module.exports.joinOurFamilyHire_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyHire' })
  res.json(datum[0] || {})
})

module.exports.joinOurFamilyWork_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'joinOurFamilyWork' })
  res.json(datum[0] || {})
})

module.exports.magazinePage_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'magazinePage' })
  res.json(datum[0] || {})
})

module.exports.magazinePageInfo_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'magazinePageInfo' })
  res.json(datum[0] || {})
})

module.exports.personalDevPage_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'personalDevPage' })
  res.json(datum[0] || {})
})

module.exports.bussinesCunsultingPage_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'bussinesCunsultingPage' })
  res.json(datum[0] || {})
})

module.exports.getService_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'getService' })
  res.json(datum[0] || {})
})

module.exports.request_get = wrap(async (req, res) => {
  let datum = await PageTexts.find({ pageType: 'request' })
  res.json(datum[0] || {})
})
