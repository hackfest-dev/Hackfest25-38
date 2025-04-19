const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    wasteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SellWaste',
        required: true
    },
    quantityOrdered: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model('Order', OrderSchema);