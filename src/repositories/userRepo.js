const User = require("../entities/User");

module.exports = class userRepo {
  static async register(name, email, password) {
    const user = new User({
      name: name,
      email: email,
      password: password,
    });

    return user.save();
  }

  static async findOne(email) {
    return User.findOne({ email: email });
  }
};
