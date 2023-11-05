const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const controller =require('../controllers/authcontroller')


router.post('/register',controller.register);

router.post('/login', controller.login);

router.post('/reset-password',controller.resetPassword)




module.exports = router;
