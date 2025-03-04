const express = require("express");
const connectDatabase = require("../../mongoose/db");
const router = require("../routes");
const path = require('path');
const dotenv = require("dotenv-safe");

const app = express();
const port = process.env.PORT ?? 4200;
const hostName = process.env.HOST_NAME || "localhost";

connectDatabase();

app.use(
  express.json({
    limit: "5mb",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.get("/", (request, response) => {
  response.status(200).send("Server running successfully!");
});

module.exports = { app, port, hostName };