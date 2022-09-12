const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});
userSchema.pre('save', function (next) {
  // eslint-disable-next-line consistent-this
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    error && console.log('Error in crypt password: ' + error);
    next();
  });
});
userSchema.statics.isThisEmailUse = async function (email) {
  try {
    const user = await this.findOne({email: email}); // check e mail dublicate
    if (user) {
      return false;
    } // the user is not a new user so this value is false
    return true; // the user is a new user so this value is true
  } catch (error) {
    console.log('error in check dublicate email func : ' + error.message);
    return false;
  }
};
module.exports = mongoose.model('User', userSchema);
