const express = require("express");
const {
  getCats,
  createCat,
  deleteCats,
  getSingleCat,
  insertCats,
} = require("../controllers/kittyController");
const kittyRoute = express.Router();

kittyRoute.route("/").get(getCats).post(createCat).delete(deleteCats);

kittyRoute.route("/bulk-insert").post(insertCats);
kittyRoute.route("/:cat").get(getSingleCat);

module.exports = kittyRoute;