const { Router } = require("express");
const beerController = require("../controllers/beer.controller");
const router = new Router();

router.get("/beers", beerController.getBeers);

module.exports = router;