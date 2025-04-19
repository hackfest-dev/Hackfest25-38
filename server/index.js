require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db');

// 🔌 Connect to Mongo
connection();

// ✅ Setup body parser with increased limit (for image data)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ Setup CORS (before routes)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// 🔁 Routes
app.use('/api', require('./routes/register'));
app.use('/api', require('./routes/login'));
app.use('/api', require('./routes/sellwaste'));
app.use('/api', require('./routes/buywaste'));
app.use('/api', require('./routes/profile'));
app.use('/api', require('./routes/address'));

// 🚀 Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
