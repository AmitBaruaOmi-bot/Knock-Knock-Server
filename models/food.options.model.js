const mongoose = require('mongoose');

const foodOptionsSchema = new mongoose.Schema(
    {

        individual: {
            price: Number
        },
        menu: {
            price: Number
        },
        regular: {
            price: Number
        },
        medium: {
            price: Number
        },
        large: {
            price: Number
        },
        foodData: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'foodData'
        }
]
    }
);

const foodOptions = mongoose.model('foodOptions', foodOptionsSchema);
module.exports = foodOptions;