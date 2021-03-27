const beerOrderService = require("../services/beerOrder.service");

const getBeerOrders = async (req, res) => {
  const beerOrders = await beerOrderService.findAll();
  return res.status(200).send(beerOrders).json();
};

const getBeerOrder = async (req, res) => {
  const beerOrder = await beerOrderService.findById(req.params.id);
  return res.status(200).send(beerOrder).json();
};

const saveOrder = async (req, res) => {
  const { body } = req;
  const savedBeerOrder = await beerOrderService.create(body);
  console.log(savedBeerOrder);
  return res.status(200).send(savedBeerOrder).json();
};

const cancelOrder = (req, res) => {
  return res.sendStatus(204);
};

module.exports = { getBeerOrders, getBeerOrder, saveOrder, cancelOrder };
