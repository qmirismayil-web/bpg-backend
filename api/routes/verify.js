const { Router } = require('express')
const { verify_post } = require('../controllers/verifyControl')

const router = Router()

router.post('/api/verify', verify_post)

module.exports = router
