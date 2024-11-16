const mongoose = require('mongoose');

const restaurantDataSchema = new mongoose.Schema(
    {
        
            name: String,
            foodData: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'foodData'
            }]
        
    }
);

const restaurantData = mongoose.model('restaurantData', restaurantDataSchema);
module.exports = restaurantData;