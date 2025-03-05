const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');

const handleUserLogin = asyncHandler(async (request, response) => {
    try {
        // Check if username exists
        const { username, password } = request.body;
        if (!username || !password) {
            return res.status(400).json({
                "message": "Username and Password are required."
            });
        }

        const user = await User.findOne({ [username]: username});
        if (!user) return response.send("User not found");

        // Compare passwords
        const matchedPassword = await bcrypt.compare(password, user.password);
        if (matchedPassword) {
            // response.render("home");
            return response.send("User logged in successfully!")
        }
        return response.send("Wrong password");
    } catch (error) {
        console.log("Error", error);
        response.render("wrong_input");
    }
});

module.exports = handleUserLogin;