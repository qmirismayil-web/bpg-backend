const { Router } = require('express')
const { recall_post } = require('../controllers/recallControl')

const router = Router()

router.post('/api/recall', recall_post)

module.exports = router
