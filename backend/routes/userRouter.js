const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {
  validateUserRegister,
  userValidation,
  loginValidation,
} = require('../middlewares/validation/user');
router.post(
  '/create-user',
  validateUserRegister,
  userValidation,
  authController.userRegister,
);
router.post(
  '/login',
  loginValidation,
  userValidation,
  authController.userLogin,
);
module.exports = router;
