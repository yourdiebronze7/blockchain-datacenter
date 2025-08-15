const express = require('express');
const Customer = require('../models/customer');
const router = express.Router();

// Get all customers
router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Add a new customer
router.post('/', async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).json(customer);
});

module.exports = router;
