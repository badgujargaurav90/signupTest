var express = require('express');
const signupController = require('../controller/customer-controller');
var router = express.Router();
const Validator = require('../middlewares/validator');
router.post('/', Validator('register'), signupController.signup)

module.exports = router;