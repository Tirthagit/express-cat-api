const express = require("express");
const handleUserLogin = require("../controllers/loginController");
const loginRoute = express.Router();

loginRoute.route("/").post(handleUserLogin);

module.exports = loginRoute;
