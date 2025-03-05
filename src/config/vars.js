const path = require('node:path');
const dotenv = require("dotenv-safe");

dotenv.config(
    {
        allowEmptyValues: true,
        path: path.join(__dirname, "..", "..", ".env"),
        example: path.join(__dirname, "..", "..", ".env.example")
    }
);

const vars = {
    port: process.env.PORT || 4200,
    hostName: process.env.HOST_NAME || "localhost",
    MONGO_URI: process.env.MONGO_URI
}

module.exports = vars;