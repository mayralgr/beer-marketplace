const { Router } = require('express');
const beersController = require('../controllers/beers.controller');
const router = new Router();

router.get('/', beersController.getBeer);

router.post('/', beersController.saveBeer);

module.exports = router;