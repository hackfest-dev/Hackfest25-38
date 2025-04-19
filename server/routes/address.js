const express = require('express');
const router = express.Router();
const AddressModel = require('../models/address');

router.post('/address', async (req, res) => {
    try {
      console.log('Incoming data:', req.body);
      
      const newaddress = new AddressModel({
        name: req.body.name,
        address: req.body.address,
        pincode: req.body.pincode,
        phoneno: req.body.phoneno,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        productImage: req.body.productImage,
      });
  
      const savedaddress = await newaddress.save();
      res.status(201).json(savedaddress);
  
    } catch (err) {
      console.error('Error saving address:', err);
      res.status(500).json({ error: 'Failed to save waste', details: err.message });
    }
  });

  module.exports = router;