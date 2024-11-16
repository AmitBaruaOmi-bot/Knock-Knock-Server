const mongoose = require('mongoose');


const foodCategorySchema = new mongoose.Schema(
    
        {
            name: String,
            foodData: [{
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'foodData'
            }]  
        }

);

const foodCategory = mongoose.model('foodCategory', foodCategorySchema);
module.exports = foodCategory;