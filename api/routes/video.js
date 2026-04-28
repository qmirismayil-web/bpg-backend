const { Router } = require('express');
const { video_get } = require('../controllers/videoControl');

const router = Router();

router.get("/api/video", video_get);

module.exports = router;