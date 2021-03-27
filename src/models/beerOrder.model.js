const { model, Schema } = require('mongoose');

const BeerOrderSchema = new Schema({
    person : {
        type: Schema.Types.ObjectId,
        ref: "Person"
    },
    beer : {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true,
    toJSON: {
        versionKey: false,
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

module.exports = model('BeerOrder',BeerOrderSchema);
