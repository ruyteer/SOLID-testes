const userRepo = require("../repositories/userRepo");
const argon2 = require("argon2");

module.exports = class userServices {
  static async register(name, email, password) {
    const user = await User.findOne({ email: email });

    if (user) {
      throw new Error("O email já existe");
    }

    if (!name || !email || !password) {
      throw new Error("Por favor, preencha todos os campos");
    }

    const hash = await argon2.hash(password);

    return userRepo.register(name, email, hash);
  }

  static async login(email, password) {
    const user = await userRepo.findOne(email);

    if (!email || !password) {
      throw new Error("Preencha todos os campos");
    }

    if (!user) {
      throw new Error("Email incorreto");
    }

    // pass match

    const match = await argon2.verify(user.password, password);

    if (match == false) {
      throw new Error("Senha incorreta");
    }

    return user;
  }
};
