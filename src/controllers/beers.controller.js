const beerService = require("../services/beer.service");

const getBeers = async ( req, res ) => {
    const beers = await beerService.findAll();
    return res.status(200).send(beers).json();
}

const saveBeer = async ( req, res ) => {
    const beerSaved = await beerService.create(req.body);
    return res.status(201).send(beerSaved).json();
}

module.exports = { getBeers, saveBeer };