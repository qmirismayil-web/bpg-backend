const { Router } = require('express')
const { slides_get } = require('../controllers/slidesControl')

const router = Router()

router.get('/api/slides/all', slides_get)

module.exports = router
