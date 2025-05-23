const express = require('express');
const router = express.Router();
const AddressModel = require('../models/address');
const multer = require('multer');

router.post('/address', async (req, res) => {
  try {

    const newAddress = new AddressModel({
      name: req.body.name,
      address: req.body.address,
      pincode: req.body.pincode,
      phoneno: req.body.phoneno,
      productName: req.body.productName,
    });

    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (err) {
    console.error('Error saving address:', err);
    res.status(500).json({ error: 'Failed to save address', details: err.message });
  }
});

module.exports = router;
