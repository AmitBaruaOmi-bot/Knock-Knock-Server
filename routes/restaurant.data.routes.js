const express = require('express');
const router = express.Router();

const restaurantData = require('../models/restaurant.data.model.js');

router.get('/restaurantData', (req, res) => {

    restaurantData.find()
        
        .then((allRestaurantData) => {
            res.json(allRestaurantData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/restaurantData', (req, res) => {

    restaurantData.create(req.body)
        .then((createdRestaurantData) => {
            res.json(createdRestaurantData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.get('/restaurantData/:id', (req, res) => {

    restaurantData.findById(req.params.id)
        
        .then((foundRestaurantData) => {
            res.json(foundRestaurantData)
        })

        .catch((err) => {
            res.status(500).json(err);
        })
});

router.put('/restaurantData/:id', (req, res) => {
    restaurantData.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedRestaurantData) => {
            res.json(updatedRestaurantData)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

});

router.delete('/restaurantData/:id', (req, res) => {
    restaurantData.findByIdAndDelete(req.params.id)
        .then((deletedRestaurantData) => {
            res.json(deletedRestaurantData)
        })
        .catch((err) => {
            res.json(err)
        })

});


module.exports = router;