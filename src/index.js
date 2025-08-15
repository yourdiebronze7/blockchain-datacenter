const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blockchainDatacenter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

// Route example
app.get('/', (req, res) => {
  res.send('Welcome to Blockchain Data Center API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
