const { Router } = require('express')
const { search_get } = require('../controllers/searchControl')

const router = Router()

router.get('/api/search/:word/:lang', search_get)

module.exports = router
