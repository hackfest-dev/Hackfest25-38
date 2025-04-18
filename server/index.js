require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db');

connection();

app.use(express.json());
app.use(cors());

const registerRoute = require('./routes/register');
app.use('/api', registerRoute);

const loginRoute = require('./routes/login');
app.use('/api', loginRoute);  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${3001}`);
});