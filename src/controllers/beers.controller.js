const beerService = require("../services/beer.service");

const getBeers = async ( req, res ) => {
    const beers = await beerService.getBeers();
    return res.status(200).send(beers).json();
}

const saveBeer = async ( req, res ) => {
    console.log(req.body);
    return res.status(201).send({
        message : 'created',
    }).json();
}

module.exports = { getBeers, saveBeer };