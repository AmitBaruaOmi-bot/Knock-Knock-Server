const express = require('express');
const router = express.Router();
const user = require('../models/user.model');
const { body, validationResult } = require('express-validator');

router.use(express.json());


router.post("/signup", [
  body('email').isEmail(),
  body('name').isLength({ min: 4 }),
  body('password').isLength({ min: 8 })
], async (req, res) => {
  console.log(req.body.name,
    req.body.email,
    req.body.password,
    req.body.location)
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ err: err.array() });
  }
  try {
    await user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location
    })
    
    res.json(req.body);
  }
  catch (err) {
    console.error(err);
    res.json({ success: false })
  }
});

router.post("/login", [
  body('email').isEmail(),
  body('password').isLength({ min: 8 })
], async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ err: err.array() });
  }

  try {
    let userData = await user.findOne(req.body.email)
    if (!userData) {
      return res.status(404).json({ success: false, message: "Email not found" });
    }

    if (userData.password !== req.body.password) {
      return res.status(400).json({ success: false, message: "Wrong password" });
    }
    return res.json({ success: true });
  }
  catch (err) {
    console.error(err);
    res.json({ success: false })
  }
});

router.get('/user', (req, res) => {
  user.findOne(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.status(500).json(err)
    })

});

router.get('/user/:id', (req, res) => {
  user.findById(req.params.id, req.body)
    .then((foundUser) => {
      res.json(foundUser)
    })

    .catch((err) => {
      res.status(500).json(err)
    })

});

router.put('/user/:id', (req, res) => {
  user.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser)
    })
    .catch((err) => {
      res.status(500).json(err)
    })

});

router.delete('/user/:id', (req, res) => {
  user.findByIdAndDelete(req.params.id, req.body)
    .then((deletedUser) => {
      res.json(deletedUser)
    })
    .catch((err) => {
      res.status(500).json(err)
    })

})



module.exports = router;
