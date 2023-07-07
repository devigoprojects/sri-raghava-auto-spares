const express = require('express');
const router = express.Router();
const brand = require('../../controllers//bike/brand');


router.get('/',brand.getAllBrands);
router.post('/',brand.addBrand);
router.get('/:name',brand.brand);

module.exports = router;