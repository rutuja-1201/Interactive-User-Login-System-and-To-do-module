const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const checkAuth = require('../middleware/check-auth');


router.put('/profile', checkAuth, userController.updateProfile);

router.get('/profile', checkAuth, userController.getUserProfile);



module.exports = router;
