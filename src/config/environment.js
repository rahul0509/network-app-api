// src/config/environment.js
require("dotenv").config();

const environment = {
  port: Number(process.env.port) || 3000,
  appEnvironment: process.env.appEnvironment || "development",
  clientOrigin: process.env.clientOrigin || "http://localhost:4200",
  accessTokenSecret: process.env.accessTokenSecret,
  refreshTokenSecret: process.env.refreshTokenSecret,
  accessTokenLifetime: "15m",
};

if (!environment.accessTokenSecret || !environment.refreshTokenSecret) {
  throw new Error(
    "accessTokenSecret and refreshTokenSecret must be set in the .env file",
  );
}

environment.isProduction = environment.appEnvironment === "production";

module.exports = environment;
