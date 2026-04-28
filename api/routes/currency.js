const { Router } = require('express')
const {
  currency_get,
  currency_all_get,
  currency_date_get,
} = require('../controllers/currencyControl')

const router = Router()

router.get('/api/currency', currency_get)
router.get('/api/currency/all', currency_all_get)
router.get('/api/list', currency_date_get)

module.exports = router
