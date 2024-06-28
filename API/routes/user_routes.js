const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users/:id/verify/:token',userController.verifyEmail);


module.exports = router;