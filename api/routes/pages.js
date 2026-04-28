const { Router } = require('express')
const {
  personalDevCard_get,
  bussinesCunsultingCard_get,
  joinOurFamilyCard_get,
  subscribeMagazine_get,
  about_get,
  error_get,
  success_get,
  joinOurFamilyHire_get,
  joinOurFamilyPage_get,
  magazinePage_get,
  magazinePageInfo_get,
  personalDevPage_get,
  bussinesCunsultingPage_get,
  getService_get,
  joinOurFamilyWork_get,
  request_get,
} = require('../controllers/pagesControl')

const router = Router()

router.get('/api/pages/personalDevCard', personalDevCard_get)
router.get('/api/pages/bussinesCunsultingCard', bussinesCunsultingCard_get)
router.get('/api/pages/joinOurFamilyCard', joinOurFamilyCard_get)
router.get('/api/pages/subscribeMagazine', subscribeMagazine_get)
router.get('/api/pages/about', about_get)
router.get('/api/pages/error', error_get)
router.get('/api/pages/success', success_get)
router.get('/api/pages/joinOurFamilyPage', joinOurFamilyPage_get)
router.get('/api/pages/joinOurFamilyHire', joinOurFamilyHire_get)
router.get('/api/pages/joinOurFamilyWork', joinOurFamilyWork_get)
router.get('/api/pages/magazinePage', magazinePage_get)
router.get('/api/pages/magazinePageInfo', magazinePageInfo_get)
router.get('/api/pages/personalDevPage', personalDevPage_get)
router.get('/api/pages/bussinesCunsultingPage', bussinesCunsultingPage_get)
router.get('/api/pages/getService', getService_get)
router.get('/api/pages/request', request_get)

module.exports = router
