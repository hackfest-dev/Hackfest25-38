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

const sellWasteRoute = require('./routes/sellwaste');
app.use('/api', sellWasteRoute);

const buyWasteRoute = require('./routes/buywaste'); 
app.use('/api', buyWasteRoute);

const profileRoute = require('./routes/profile');
app.use('/api',profileRoute);

<<<<<<< HEAD
const buyerOrderRoutes = require('./routes/buyerOrders');
app.use('/api',buyerOrderRoutes);


const sellerOrderRoutes = require('./routes/sellerOrders');
app.use('/api',sellerOrderRoutes);

=======
const addressRoute = require('./routes/address');
app.use('/api',addressRoute);
>>>>>>> 4c287a8733f16244e9a53bb9d2bb53bf7133d9ee

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${3001}`);
});



