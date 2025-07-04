const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('UXGenius Backend is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Professional Comment: This initializes an Express server with a test route to verify the backend setup for UXGenius.