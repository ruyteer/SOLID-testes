const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
}

main().catch((err) => {
  console.log(err);
});

module.exports = mongoose;
