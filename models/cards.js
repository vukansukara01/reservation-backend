const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema(
    {
        title:{
            type: String,
            required: true

        },
        description:{
            type: String,
            required: true
        },

    }, {timestamps: true}
);

const Card = mongoose.model('Card', cardSchema);

module.exports= Card;