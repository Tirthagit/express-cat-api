const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const path = require("path");
const bcrypt = require("bcryptjs");

const handleUserRegistration = asyncHandler(async (request, response) => {
  const data = {
    username: request.body.username,
    password: request.body.password
  }
//   if (!username || !password) {
//     return res.status(400).json({
//       message: "Username and Password are required.",
//     });
//   }
  const existingUser = await User.findOne({ username: data.username });
  if (existingUser) {
    return response.render("user_exists");
  } else {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedPassword;

    // Inserting new data into the database
    try {
      const userData = await User.insertMany(data);
    //   console.log(`Username: ${data.name}, Password: ${data.password}`);
      console.log(userData)
      response.render("signup_sucess");
    } catch (error) {
      console.log("Error", { error: error.message });
      response.render("error");
    }
  }
});

module.exports = handleUserRegistration;