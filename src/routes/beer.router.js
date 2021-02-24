const { Router } = require("express");
const { getBeers, saveBeer } = require("../controller/beer.controller");
const router = Router();

router.get("/", getBeers);

router.post("/", saveBeer);

module.exports = router;
