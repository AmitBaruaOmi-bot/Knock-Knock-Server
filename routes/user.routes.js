const express = require('express');
const router = express.Router();
const user = require('../models/user.model');
const { body, validationResult } = require('express-validator');


router.post("/newuser", [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password').isLength({ min: 8 })
], async (req, res) => {
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
    res.json({ success: true })
  }
  catch (err) {
    console.error(err);
    res.json({ success: false })
  }
});

/*router.get("/", (req, res, next) => {
  res.json("All good in here");
}); */

module.exports = router;
