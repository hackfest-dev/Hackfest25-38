const express = require('express');
const router = express.Router();
const AddressModel = require('../models/address');

router.get('/api/orderdetails/:id', async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await AddressModel.findById(orderId); // or whatever model you use for orders
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        console.error('Error fetching order details:', err);
        res.status(500).json({ error: 'Failed to fetch order', details: err.message });
    }
});



module.exports = router;