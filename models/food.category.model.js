const mongoose = require('mongoose');


const foodCategorySchema = new mongoose.Schema(
    {
        categoryname:{
            type:String       
        }
    }

);

const foodCategory = mongoose.model('foodCategory', foodCategorySchema);
module.exports = foodCategory;