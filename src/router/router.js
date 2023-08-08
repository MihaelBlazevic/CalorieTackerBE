const express = require('express');
const router = express.Router();
const User = require('../templates/user');

router.post('/register', function(req, res, next) {
  const { email, password } = req.body;

  // Validate that both email and password fields are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  User.create({ email, password })
    .then(function(user) {
      console.log("User Created!"); // Move the console.log here
      res.send(user);
    })
    .catch(next);
});

module.exports = router;
