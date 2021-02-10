const { Router } = require('express');
const testController = require('../controllers/test.controller');
const router = new Router();

router.get('/', testController.test);

module.exports = router;