const mongoose = require('mongoose');

const foodOptionsSchema = new mongoose.Schema(
    {
        options: {
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
            }
        }
    }
);

const foodOptions = mongoose.model('foodOptions', foodOptionsSchema);
module.exports = foodOptions;