//Delete later
const BeerOrder = require("../models/beerOrder.model");

class BeerOrderService {
  async create(order) {
    const newBeerOrder = new BeerOrder(order);
    console.log(newBeerOrder);
    await newBeerOrder.save();
    return newBeerOrder;
  }

  async findById(orderId) {
    const beerOrder = await BeerOrder.findOne({ _id: orderId });
    return beerOrder;
  }

  async findAll() {
    const allBeerOrders = await BeerOrder.find();
    return allBeerOrders;
  }

  async deleteOrder(orderId) {
    await BeerOrder.deleteOne({ _id: orderId });
  }
}

module.exports = new BeerOrderService();
