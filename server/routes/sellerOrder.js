const express = require('express');
const router = express.Router();
const Order = require('../models/order');


router.post('/buyer/order', async (req, res) => {
    try {
        const { buyerId, wasteId, quantityOrdered, deliveryAddress } = req.body;

        const newOrder = new Order({
            buyerId,
            wasteId,
            quantityOrdered,
            deliveryAddress
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        console.error('Error placing order:', err);
        res.status(500).json({ error: 'Failed to place order' });
    }
});


router.get('/buyer/orders/:buyerId', async (req, res) => {
    try {
        const orders = await Order.find({ buyerId: req.params.buyerId })
            .populate('wasteId', 'productName productPrice');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch buyer orders' });
    }
});

module.exports = router;