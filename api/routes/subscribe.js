const { Router } = require('express')
const { subscribe_post } = require('../controllers/subscribeControl')

const router = Router()

router.post('/api/subscribe', subscribe_post)

module.exports = router
