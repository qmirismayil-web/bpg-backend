const { Router } = require('express')
const {
  services_get,
  services_post,
  categories_get,
  subcategories_get,
} = require('../controllers/servicesControl')

const router = Router()

router.post('/api/services/form', services_post)
router.get('/api/services/all', services_get)
router.get('/api/services/categories', categories_get)
router.get('/api/services/subcategories', subcategories_get)

module.exports = router
