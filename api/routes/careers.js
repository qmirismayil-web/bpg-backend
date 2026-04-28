const { Router } = require('express')
const { careers_get, vacancy_get } = require('../controllers/careersControl')

const router = Router()

router.get('/api/careers', careers_get)
router.get('/api/careers/:id', vacancy_get)

module.exports = router
