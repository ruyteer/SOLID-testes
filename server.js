const express = require("express");
const cors = require("cors");
const db = require("./src/db/database");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const router = require("./src/routes/userRoutes");
app.use(router);

app.listen(3000);
