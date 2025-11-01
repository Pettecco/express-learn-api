const { Router } = require('express');
const UserController = require('../controllers/UserController.js');

const router = Router();
const usersController = new UserController();

router.get('/users', (req, res) => usersController.getAll(req, res));

module.exports = router;
