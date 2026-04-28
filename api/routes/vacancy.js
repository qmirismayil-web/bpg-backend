const { Router } = require('express')
const { vacancy_post } = require('../controllers/vacancyControl')

const router = Router()

router.post('/api/vacancy', vacancy_post)

module.exports = router
