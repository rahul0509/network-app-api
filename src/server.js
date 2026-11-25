// src/server.js
const app = require("./app");
const environment = require("./config/environment");

app.listen(environment.port, () => {
  console.log(`API running on http://localhost:${environment.port}`);
});
