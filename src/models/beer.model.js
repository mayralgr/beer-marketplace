const { model, Schema } = require('mongoose');

const BeerSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    type : {
        type: String,
        required: true
    },
    country : {
        type: String,
        required: true
    } 
});

module.exports = model('Beer', BeerSchema)