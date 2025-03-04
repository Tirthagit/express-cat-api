const express = require('express');
const kittyRoute = require('./kitty.routes');
const router = express.Router();

router.use("/api/v1/cats", kittyRoute);

module.exports = router;