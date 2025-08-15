const express = require('express');
const customerRoutes = require('./routes/customerRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use('/customers', customerRoutes);
app.use('/transactions', transactionRoutes);

module.exports = app;
