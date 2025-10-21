const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/models');

exports.register = async (req, res, next) => {
  try {
    const { email, password, name, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash: hash, name, role });
    res.status(201).json({ data: { id: user.id, email: user.email, name: user.name }});
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }});
    if (!user) return res.status(401).json({ error: { message: 'Invalid credentials' }});
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: { message: 'Invalid credentials' }});
    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET || 'change_me', { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
    res.json({ data: { token }});
  } catch (err) { next(err); }
};
