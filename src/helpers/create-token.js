const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

const createToken = (id) => {
  const token = jwt.sign(
    {
      _id: id,
    },
    process.env.SECRET,
    { expiresIn: "1day" }
  );

  return token;
};

module.exports = createToken;
