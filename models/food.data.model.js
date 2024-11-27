const mongoose = require('mongoose');

const fooddataSchema = new mongoose.Schema(
  
  {
    name: {
      type: String
    },

    restaurantname: {
        type: String
    },

    img : {
      type: String
    },

    category: {
        type: String
    },
  
    price: {
      type: String
    },
  
    descriptions: {
      type: String
    }
  }
);

const fooddata = mongoose.model('fooddata', fooddataSchema);
module.exports = fooddata;