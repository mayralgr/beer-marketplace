const { model, Schema } = require('mongoose');

const PersonSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    programmingLanguage : {
        type: String,
    },
    beer : {
        type: Schema.Types.ObjectId,
        ref: 'Beer',
        required: true
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

module.exports = model('Person',PersonSchema);
