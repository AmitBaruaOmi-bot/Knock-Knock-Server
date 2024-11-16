const express = require('express');
const router = express.Router();

const foodOptions = require('../models/food.options.model.js');


router.get('/foodOptions', (req, res) => {

    foodOptions.find()
        .populate("foodData , restaurantData , foodCategory")
        .then((allFoodOptions) => {
            res.json(allFoodOptions);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/foodOptions', (req, res) => {

    foodOptions.create(req.body)
        .then((createdFoodOptions) => {
            res.json(createdFoodOptions);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.get('/foodOptions/:id', (req, res) => {

    foodOptions.findById(req.params.id, req.body)
        .then((foundFoodOptions) => {
            res.json(foundFoodOptions)
        })

        .catch((err) => {
            res.status(500).json(err);
        })
});

router.put('/foodOptions/:id', (req, res) => {
    foodOptions.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedFoodOptions) => {
            res.json(updatedFoodOptions)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

});

router.delete('/foodOptions/:id', (req, res) => {
    foodOptions.findByIdAndDelete(req.params.id, req.body)
        .then((deletedFoodOptions) => {
            res.json(deletedFoodOptions)
        })
        .catch((err) => {
            res.json(err)
        })

});


module.exports = router;