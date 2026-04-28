const { Router } = require('express')
const { team_get } = require('../controllers/teamControl')

const router = Router()

router.get('/api/team', team_get)

module.exports = router
