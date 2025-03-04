const { app, port, hostName } = require("./config/express");

app.listen(port, () =>
  console.log(`Server running on http://${hostName}:${port}`)
);
