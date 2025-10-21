const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const courseController = require('../../controllers/courseController');
const auth = require('../../middlewares/auth-required');
const deprecate = require('../../middlewares/deprecate')('v1 is deprecated, use /api/v2');

// Auth
router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);

// Courses (v1)
router.use('/courses', deprecate, auth);
router.post('/courses', courseController.create);
router.get('/courses', courseController.list);
router.get('/courses/:id', courseController.get);
router.put('/courses/:id', courseController.update);
router.delete('/courses/:id', courseController.remove);

module.exports = router;
