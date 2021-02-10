
/**
 * Method to get a beer
 * @param {*} req 
 * @param {*} res 
 */
const getBeers = (req, res) => {
    res.status(200).json([{"name": "Corona", "type": "lager"}, {"name": "Cruzcampo", "type": "lambar"}]);
}

const saveBeer = (req, res) => {
    console.log(req.body);
    res.status(201).json({"data": "SAVED"});
}
module.exports = {getBeers, saveBeer};