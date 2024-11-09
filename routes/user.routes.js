const express = require('express');
const router = express.Router();
const user = require('../../new-backend/models/user.model');
const { body, validationResult } = require('express-validator');


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
      return res.status(404).json({ success: false, message: "Email not found"});
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

/*router.get("/", (req, res, next) => {
  res.json("All good in here");
}); */

module.exports = router;
