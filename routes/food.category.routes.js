const express = require('express');
const router = express.Router();

const foodCategory = require('../models/food.category.model.js');


router.get('/foodCategory', (req, res) => {

    foodCategory.find()
        .populate("foodData , restaurantData , foodOptions")
        .then((allFoodCategory) => {
            res.json(allFoodCategory);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/foodCategory', (req, res) => {

    foodCategory.create(req.body)
        .then((createdFoodCategory) => {
            res.json(createdFoodCategory);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.get('/foodCategory/:id', (req, res) => {

    foodCategory.findById(req.params.id, req.body)
        .then((foundFoodCategory) => {
            res.json(foundFoodCategory)
        })

        .catch((err) => {
            res.status(500).json(err);
        })
});

router.put('/foodCategory/:id', (req, res) => {
    foodCategory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedFoodCategory) => {
            res.json(updatedFoodCategory)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

});

router.delete('/foodCategory/:id', (req, res) => {
    foodCategory.findByIdAndDelete(req.params.id, req.body)
        .then((deletedFoodCategory) => {
            res.json(deletedFoodCategory)
        })
        .catch((err) => {
            res.json(err)
        })

});


module.exports = router;