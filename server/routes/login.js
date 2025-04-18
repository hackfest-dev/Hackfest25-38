const express = require('express');
const router = express.Router();
const registerModel = require('../models/register');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  registerModel.findOne({ username: username })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({
            message: "OK",
            user: {
              id: user._id,
              username: user.username,
              name: user.name || '',
              email: user.email
            }
          });
        } else {
          res.json("incorrect password");
        }
      } else {
        res.json("User not found");
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Server error", details: err });
    });
});

module.exports = router;
