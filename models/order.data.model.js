const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  orderdata: [
    {
      orderdate: {
        type: Date,
        required: true
      },
      items: [
        {
          name: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          quantity: {
            type: Number,
            required: true
          }
        }
      ]
    }
  ]
});

module.exports = mongoose.model('orderData', orderSchema);