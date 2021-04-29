const BeerOrder = require("../models/beer.model");
const axios = require("axios")

class BeerService {
  
  async findAll() {
    return axios.get("http://localhost:8080/api/v1/beer/")
    .then(res => {
      const beersData = res.data;
      console.log(beersData);
      return beersData;
    })
  }

}

module.exports = new BeerService();
