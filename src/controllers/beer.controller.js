const beerService = require("../services/beer.service");

const getBeers = async (req, res) => {
  const beers = await beerService.findAll();
  console.log('X')
  console.log(beers)
  console.log('X')
  return res.status(200).send(beers).json();
};

module.exports = { getBeers };