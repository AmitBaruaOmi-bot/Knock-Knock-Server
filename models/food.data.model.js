const mongoose = require('mongoose');

const foodDataSchema = new mongoose.Schema(
  
  {
    name: {
      type: String
    },

    restaurantData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurantData"
    },
  
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodCategory"

    },
  
    img: {
      type: String
    },
  
    options: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodOptions"
    },
  
    descriptions: {
      type: [Array, {
        individual: {
          type: String
        },
        menu: {
          type: String
        }
      }]
    }
  }
);

const foodData = mongoose.model('foodData', foodDataSchema);
module.exports = foodData;