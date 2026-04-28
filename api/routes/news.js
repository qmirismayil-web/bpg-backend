const { Router } = require('express')
const {
  news_get,
  telim_get,
  news_id_get,
  news_home_get,
  telim_home_get,
} = require('../controllers/newsControl')

const router = Router()

router.get('/api/news', news_get)
router.get('/api/telim', telim_get)
router.get('/api/news/:id', news_id_get)
router.get('/api/home/news', news_home_get)
router.get('/api/home/telim', telim_home_get)

module.exports = router
