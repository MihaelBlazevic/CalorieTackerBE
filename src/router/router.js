const express = require('express');
const router = express.Router();
const User = require('../templates/user');

router.post('/register', function(req, res, next) {
  const { name,surname,email, password } = req.body;

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password }).exec();
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      
      // If the user exists and the credentials are correct, return the user details
      return res.status(200).json({ message: `SUCCESSFULLY LOGGED IN, ${user.username}!!!`})
      ret
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Validate that both email and password fields are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  User.create({ name,surname,email, password })
    .then(function(user) {
      console.log("User Created!"); // Move the console.log here
      res.send(user);
    })
    .catch(next);
});

module.exports = router;
