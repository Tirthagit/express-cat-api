const mongoose = require("mongoose");
const kittySchema = require("../schema/kittySchema");

const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;