const express = require('express');
const router = express.Router();

const foodData = require('../models/food.data.model.js');




router.get('/foodData', (req, res) => {

    foodData.find()
        .populate("restaurantname", "category", "options")
        .then((allFoodData) => {
            res.json(allFoodData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/foodData', (req, res) => {

    foodData.create(req.body)
        .then((createdFoodData) => {
            res.json(createdFoodData);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.get('/foodData/:id', (req, res) => {

    foodData.findById(req.params.id, req.body)
        .then((foundFoodData) => {
            res.json(foundFoodData)
        })

        .catch((err) => {
            res.status(500).json(err);
        })
});

router.put('/foodData/:id', (req, res) => {
    foodData.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedFoodData) => {
            res.json(updatedFoodData)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

});

router.delete('/foodData/:id', (req, res) => {
    foodData.findByIdAndDelete(req.params.id, req.body)
        .then((deletedFoodData) => {
            res.json(deletedFoodData)
        })
        .catch((err) => {
            res.json(err)
        })

});



module.exports = router;