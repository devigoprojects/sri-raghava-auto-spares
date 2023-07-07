const express = require('express');
const { addBike, getallBikes, bikeByName, bikeByBrandId } = require('../../controllers/bike/bikes');
const router = express.Router();


router.post('/',addBike);
router.get('/',getallBikes);
router.get('/name/:name',bikeByName);
router.get('/brandid/:brandId',bikeByBrandId)


module.exports = router;