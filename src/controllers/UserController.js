const createToken = require("../helpers/create-token");
const userServices = require("../services/userServices");

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, password } = req.body;
    try {
      await userServices.register(name, email, password);
      res.json({
        msg: "Registro efetuado com sucesso",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
      return;
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userServices.login(email, password);
      res.json({
        msg: "Logado com sucesso",
        token: createToken(user._id),
        user: user,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
  }
};
