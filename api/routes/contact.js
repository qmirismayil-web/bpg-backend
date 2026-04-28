const { Router } = require('express');
const { contact_get } = require('../controllers/contactControl');

const router = Router();

router.get("/api/contact", contact_get);

module.exports = router;