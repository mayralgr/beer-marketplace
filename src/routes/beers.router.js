const { Router } = require('express');
const beersController = require('../controllers/beers.controller');
const router = new Router();

router.get('/beer', beersController.getBeer);

router.post('/beer', beersController.saveBeer);

module.exports = router;