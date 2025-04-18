const express = require('express');
const router = express.Router();
const registerModel = require('../models/register'); 


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newUser = await registerModel.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Registration error:', err);
        res.status(400).json({ error: 'Registration failed', details: err.message });
    }
});

module.exports = router;
