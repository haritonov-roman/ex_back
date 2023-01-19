const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.use(express.json());

router.post('/users', userController.createUser)

router.get('/users', userController.getUsers)

router.get('/users/:id', userController.getOneUser)

router.put('/users', userController.updateUser)

router.delete('/users/:id', userController.deleteUser)

module.exports = router;