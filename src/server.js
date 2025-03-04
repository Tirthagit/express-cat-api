// const http = require("http");
// const path = require("path");

// const port = 8080;
// const body = "OK, hello from Node"
// const server = http.createServer((request, response) => {
//     if (request) console.log(`INCOMING REQUEST: ${request.url} ${request.method} ${request.headers}`)
//     response.writeHead(200, {
//         "content-length": body.length,
//         "content-type": "text/html",
//     });
//     response.end(body);
// });
// server.listen(port, () => console.log(`Server started on port ${port}`));

const connectDatabase = require("../mongoose/db");
const { app, port, hostName } = require("./config/express");


app.listen(port, () =>
  console.log(`Server running on http://${hostName}:${port}`)
);
