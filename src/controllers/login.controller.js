const jwt = require('jsonwebtoken');

const { getAll } = require('../services/login.service');

const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { users } = await getAll();

  if (!email || !password) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }

  const hasUser = users.some((user) => 
    email === user.email && password === user.password);

  if (!hasUser) { 
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const payload = { email };

  const token = jwt.sign(payload, JWT_SECRET);

  res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};