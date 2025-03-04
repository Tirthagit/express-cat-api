const express = require("express");
const {
  getCats,
  createCat,
  deleteCats,
  getSingleCat,
} = require("../controllers/kittyController");
const kittyRoute = express.Router();

kittyRoute
  .route("/")
  .get(getCats)
  .post(createCat)
  .delete(deleteCats);

  kittyRoute.route("/:cat").get(getSingleCat);

module.exports = kittyRoute;
