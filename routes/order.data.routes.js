const express = require('express');
const router = express.Router();
const orderData = require('../models/order.data.model.js'); // Ensure path is correct

router.post('/orderData', async (req, res) => {

    
  try {
    const { email, orderdate, orderdata } = req.body;

    // Ensure orderdata is valid
    if (!orderdata || !Array.isArray(orderdata)) {
      return res.status(400).json({ message: 'Order data must be an array.' });
    }

    // Create updated order object with orderdate and items
    const updatedOrderData = { orderdate, items: orderdata };

    // Find existing order by email
    
    const existingOrder = await orderData.findOne({ email: req.body.email });
    if (!existingOrder) {
      // Create new order if the user does not exist
      await orderData.create({
        email ,
        orderdata: [updatedOrderData]
      });
      return res.status(201).json({ success: true, message: 'Order created successfully!' });
    } else {
      // Append new order data to existing order
      await orderData.findOneAndUpdate(
        { email },
        { $push: { orderdata: updatedOrderData } },
        { new: true }, // Return the updated document
      );
      return res.status(200).json({ success: true, message: 'Order added successfully!' });
    }
  } catch (err) {
    console.error('Error in /orderData:', err.message);
    res.status(500).json({ message: 'Server error: Unable to process the order.', error: err.message });
  }
});

router.post('/myorderData', async (req, res) => {
    try{
        let myData = await orderData.findOne({'email': req.body.email})
        res.json({orderData: myData.orderdata})
    }
    catch(err){
        console.error('Error in /orderData:', err.message);
    res.status(500).json({ message: 'Server error: Unable to process the order.', error: err.message });
    }
})

module.exports = router;
