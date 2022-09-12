const User = require('../models/User');
const bcrypt = require('bcrypt');
exports.userLogin = async function (req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    //check user in db
    if (user !== null) {
      console.log('User found:' + user);
      await bcrypt.compare(req.body.password, user.password, (err, same) => {
        if (same) {
          res.json({message: 'Successfully login!'});
        } else {
          res.json('Password is wrong.');
        }
        err && console.log('Error in login func : ' + err);
      }); // check password
    } else {
      res.json('User not found!');
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error});
  }
};
exports.userRegister = async function (req, res) {
  try {
    const isUserNew = await User.isThisEmailUse(req.body.email);
    if (isUserNew === true) {
      const user = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } else {
      res.send('The email is dublicated.');
    }
  } catch (error) {
    console.log('error catch: ' + error);

    res.json({success: false, message: error});
  }
};
