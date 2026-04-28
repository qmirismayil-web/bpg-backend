const { Router } = require('express')
const { holidays_get } = require('../controllers/teqvimControl')

const router = Router()

router.get('/api/holidays', holidays_get)

module.exports = router
