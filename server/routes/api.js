const express = require('express');
const router = express.Router();

// Define API routes
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.get('/users', (req, res) => {
  // Logic to fetch users from the database or any other data source
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];
  res.json(users);
});

router.post('/users', (req, res) => {
  // Logic to create a new user based on the request body
  const { name } = req.body;
  const newUser = { id: 3, name };
  res.status(201).json(newUser);
});

module.exports = router;