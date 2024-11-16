const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');

router.use(express.json());


router.post("/signup", [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
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
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location
    })
    res.json({ success: true })
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
    let userData = await User.findOne(req.body.email)
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

router.get('/User', (req, res) => {
  User.findOne(req.body)
      .then((User) => {
          res.json(User)

              .catch((err) => {
                  res.status(500).json(err)
              })
      })
});

router.get('/User/:id', (req, res) => {
  User.findById(req.params.id)
      .then((User) => {
          res.json(User)

              .catch((err) => {
                  res.status(500).json(err)
              })
      })
});

router.put('/User/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((updatedUser) => {
          res.json(updatedUser)

              .catch((err) => {
                  res.status(500).json(err)
              })
      })
});

router.delete('/User/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, req.body)
      .then((deletedUser) => {
          res.json(deletedUser)

              .catch((err) => {
                  res.status(500).json(err)
              })
      })
})



module.exports = router;
