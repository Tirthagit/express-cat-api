const express = require("express");
const handleUserRegistration = require("../controllers/registerController");
const registerRoute = express.Router();

registerRoute.route("/").post(handleUserRegistration);

module.exports = registerRoute;