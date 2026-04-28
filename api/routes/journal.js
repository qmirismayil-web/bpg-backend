const { Router } = require('express')
const { categories_get, form_post } = require('../controllers/journalControl')

const router = Router()

router.get('/api/journal/categories', categories_get)
router.post('/api/journal/post', form_post)

module.exports = router
