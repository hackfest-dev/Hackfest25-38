const express = require('express');
const router = express.Router();
const SellWasteModel = require('../models/sellwaste');

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/sellwaste', upload.single('productImage'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const newWaste = new SellWasteModel({
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productPrice: req.body.productPrice,
            productQuantity: req.body.productQuantity,
            productImage: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });

        const savedWaste = await newWaste.save();
        res.status(201).json(savedWaste);
    } catch (err) {
        console.error('Error saving waste:', err);
        res.status(500).json({ error: 'Failed to save waste', details: err.message });
    }
});

module.exports = router;
