const { getAllCollections, addCollection } = require('../controllers/collections')

const router = require('express').Router()


router.get('/',getAllCollections);
router.post('/',addCollection);


module.exports = router