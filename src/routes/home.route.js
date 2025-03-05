const express = require("express");
const handleIndexRequest = require("../controllers/homeController");
const homeRoute = express.Router();

homeRoute.route("/").get(handleIndexRequest);

module.exports = homeRoute;