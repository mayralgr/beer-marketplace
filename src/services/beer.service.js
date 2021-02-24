const Beer = require('../models/beer.model');

class BeerService {

    async create( beer ) {
        const newBeer = new Beer(beer);
        return newBeer.save();
    }
}