const {check, validationResult} = require('express-validator');
exports.validateUserRegister = [
  //for username:
  check('userName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('The user name is can not be empty!')
    .isString()
    .withMessage('Invalid username!'),
  //for email
  check('email').normalizeEmail().isEmail().withMessage('Invalid Email'),
  //for password
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('The password is can not be empty!')
    .isLength({min: 6})
    .withMessage('The password is too weak!'),
  //for re-password
  check('confirmPassword')
    .trim()
    .not()
    .isEmpty()
    .withMessage('The re-password is can not be empty!')
    .custom((value, {req}) => {
      if (value !== req.body.password) {
        throw new Error('The passwords dont match!');
      }
      return true;
    }),
];
exports.userValidation = (req, res, next) => {
  const result = validationResult(req).array();
  console.log(result);
  if (!result.length) {
    next();
  } //no validation error so call next method
  else {
    const error = result[0].msg;
    console.log(result[0]);
    res.json({success: false, message: error}); // if there is an error we send this error to the response
  }
};
exports.loginValidation = [
  check('email').trim().not().isEmpty().withMessage('email is required.'),
  check('password').trim().not().isEmpty().withMessage('Password is required.'),
];
