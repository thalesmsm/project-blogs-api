const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    
    return { type: null, message: payload };    
  } catch (err) {
    return { type: 401, message: 'Expired or invalid token' };
  }
};

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const { type, message } = verifyToken(token);

  req.user = message;

  if (type) return res.status(type).json({ message });
  return next();
};