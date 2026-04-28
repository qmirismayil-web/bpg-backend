const { Router } = require('express');
const { gender_get, entrepreneurship_get, workspace_get, position_get, marital_get, subject_get } = require('../controllers/selectsControl');

const router = Router();

router.get("/api/selects/gender", gender_get);
router.get("/api/selects/entrepreneurship", entrepreneurship_get);
router.get("/api/selects/workspace", workspace_get);
router.get("/api/selects/position", position_get);
router.get("/api/selects/marital", marital_get);
router.get("/api/selects/subject", subject_get);

module.exports = router;