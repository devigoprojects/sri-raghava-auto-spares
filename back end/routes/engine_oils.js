const express = require('express');
const { addEngineOil, getOils } = require('../controllers/engine_oils');
const router = express.Router();

router.post('/',addEngineOil);
router.get('/',getOils);


module.exports = router;