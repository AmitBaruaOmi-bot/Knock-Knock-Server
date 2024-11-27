const express = require('express');
const router = express.Router();

// const foodCategory = require('../models/food.category.model.js');
const fooddata = require('../models/food.data.model.js');
// const restaurantData = require('../models/restaurant.data.model.js');




router.get('/getfooddata', (req, res) => {

    fooddata.find()
        // .populate('foodCategory restaurantData foodOptions')
        .then((allfooddata) => {
            res.json(allfooddata);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

router.post('/fooddata', async (req, res) => {
    try {
        const createdfooddata = await fooddata.create(req.body);

        console.log(createdfooddata);
        
        res.status(200).json(createdfooddata);
        // res.redirect('/fooddata/${createdfooddata._id}');
    }
    catch (err) {
        res.status(400).json(err);
    }
});


router.get('/fooddata/:id', (req, res) => {

    fooddata.findById(req.params.id)
        .then((foundfooddata) => {
            res.json(foundfooddata)
        })

        .catch((err) => {
            res.status(500).json(err);
        })
});

router.put('/fooddata/:id', (req, res) => {
    fooddata.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedfooddata) => {
            res.json(updatedfooddata)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

});

router.delete('/fooddata/:id', (req, res) => {
    fooddata.findByIdAndDelete(req.params.id)
        .then((deletedfooddata) => {
            res.json(deletedfooddata)
        })
        .catch((err) => {
            res.json(err)
        })

});

router.get('/foodCategory/:category', (req, res) => {

    fooddata.findById({ category: req.params.category })
        .then((foundfooddata) => {
            res.json(foundfooddata)
        })

        .catch((err) => {
            res.status(500).json(err);
        })

});

router.get('/retaurantData/:retaurantName', (req, res) => {

    fooddata.findById({ retaurantName: req.params.retaurantName })
        .then((foundfooddata) => {
            res.json(foundfooddata)
        })

        .catch((err) => {
            res.status(500).json(err);
        })

});



module.exports = router;