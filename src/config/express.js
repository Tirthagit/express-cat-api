const express = require("express");
const connectDatabase = require("../../mongoose/db");
const router = require("../routes");
const path = require('path');
const vars = require("./vars");

const app = express();
const port = vars.port;
const hostName = vars.hostName

const viewsPath = path.join(__dirname, "..", "views");
app.set("views", viewsPath);
app.set("view engine", "ejs")

connectDatabase();

app.use(
  express.json({
    limit: "5mb",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

// app.get("/", (request, response) => {
//   response.status(200).send("Server running successfully!");
// });

module.exports = { app, port, hostName };