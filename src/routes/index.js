const express = require('express');
const kittyRoute = require('./kitty.routes');
const homeRoute = require('./home.route');
const loginRoute = require('./login.routes');
const registerRoute = require('./register.route');
const router = express.Router();

router.use("/", homeRoute);
router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.use("/api/v1/cats", kittyRoute);

module.exports = router;