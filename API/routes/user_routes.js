const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/',userController.firstFunction)
router.put('/updateuser',userController.updateUser)

module.exports = router;