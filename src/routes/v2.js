const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const courseController = require('../../controllers/courseController');
const auth = require('../../middlewares/auth-required');

// Auth
router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);

// Courses (v2) - no deprecation header
router.use('/courses', auth);
router.post('/courses', courseController.create);
router.get('/courses', courseController.list);
router.get('/courses/:id', courseController.get);
// v2 adds PATCH
router.patch('/courses/:id', courseController.update);
router.delete('/courses/:id', courseController.remove);

module.exports = router;
