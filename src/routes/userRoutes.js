const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/users', userController.createUser);
router.get('/users', auth, userController.getAllUsers); // Korunan rota
router.get('/users/:id', auth, userController.getUserById); // Korunan rota
router.put('/users/:id', auth, userController.updateUser); // Korunan rota
router.delete('/users/:id', auth, userController.deleteUser); // Korunan rota

module.exports = router;