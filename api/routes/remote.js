const { Router } = require('express')
const { hire_post } = require('../controllers/hireControl')
const { work_post } = require('../controllers/workControl')

const router = Router()

router.post('/api/hire', hire_post)
router.post('/api/work', work_post)

module.exports = router
