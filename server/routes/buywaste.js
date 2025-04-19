const express = require('express');
const router = express.Router();
const SellWasteModel = require('../models/sellwaste');

router.get('/sellwaste', async (req, res) => {
    try {
        const wastes = await SellWasteModel.find();
        res.json(wastes);
    } catch (err) {
        console.error('Error fetching wastes:', err);
        res.status(500).json({ error: 'Failed to fetch wastes', details: err.message });
    }
}
);


module.exports = router;
