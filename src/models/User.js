const mongoose = require('mongoose');
const userSchema = require("../schema/userSchema");

const User = new mongoose.model("users", userSchema);

module.exports = User;