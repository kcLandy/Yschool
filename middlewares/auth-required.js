const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: { message: 'No authorization header' }});
  const parts = header.split(' ');
  if (parts.length !== 2) return res.status(401).json({ error: { message: 'Bad authorization header' }});
  const token = parts[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'change_me');
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: { message: 'Invalid token' }});
  }
};
