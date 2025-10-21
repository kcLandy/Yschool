const { Course } = require('../db/models');

// basic CRUD
exports.create = async (req, res, next) => {
  try {
    const payload = req.body;
    payload.teacherId = req.user.id;
    const course = await Course.create(payload);
    res.status(201).json({ data: course });
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const courses = await Course.findAll();
    res.json({ data: courses });
  } catch (err) { next(err); }
};

exports.get = async (req, res, next) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: { message: 'Not found' }});
    res.json({ data: course });
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: { message: 'Not found' }});
    // policy: only creator or admin
    if (course.teacherId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: { message: 'Forbidden' }});
    }
    await course.update(req.body);
    res.json({ data: course });
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: { message: 'Not found' }});
    if (course.teacherId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: { message: 'Forbidden' }});
    }
    await course.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};
