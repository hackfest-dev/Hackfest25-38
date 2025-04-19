const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const SellWaste = require('../models/sellwaste');

router.get('/seller/orders/:sellerId', async (req, res) => {
    try {
      
        const sellerWastes = await SellWaste.find({ sellerId: req.params.sellerId });

        const wasteIds = sellerWastes.map(waste => waste._id);

      
        const orders = await Order.find({ wasteId: { $in: wasteIds } })
            .populate('buyerId', 'name email')
            .populate('wasteId', 'productName productPrice');

        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch seller orders' });
    }
});

module.exports = router;