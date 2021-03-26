const { Router } = require('express');
const beerOrderController = require('../controllers/beerOrder.controller');
const router = new Router();

router.get('/beerOrders', beerOrderController.getBeerOrders);

router.get('/beerOrder/:beerOrderId', beerOrderController.getBeerOrder);

router.post('/beerOrder', beerOrderController.saveOrder);

router.delete('/beerOrder/:beerOrderId', beerOrderController.cancelOrder);

module.exports = router;