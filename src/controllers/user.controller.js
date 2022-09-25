const jwt = require('jsonwebtoken');

const { getAll } = require('../services/login.service');
const { createUser } = require('../services/user.service');
const { validateUserBody } = require('../services/validations');

const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
  try {
    const { error } = validateUserBody(req.body);
    
    const users = await getAll();
    
    const hasUser = users.some((user) => 
    req.body.email === user.email);
    console.log(hasUser);
    if (hasUser) { 
      return res.status(409).json({ message: 'User already registered' });
    }
    if (error) return res.status(400).json({ message: error.message });
    
    await createUser(req.body);

    const payload = req.body;

    const token = jwt.sign(payload, JWT_SECRET);
  
    return res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};