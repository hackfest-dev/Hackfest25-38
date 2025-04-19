const express = require('express');
const router = express.Router();
const registerModel = require('../models/register');


router.get('/profile', async (req, res) => {
    try {
      const userId = req.query.id; 
  
      if (!userId) return res.status(400).json({ message: 'User ID missing' });
  
      const user = await registerModel.findById(userId).select('username name email');

      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  });
  
  module.exports = router;