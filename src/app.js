// src/app.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const environment = require("./config/environment");
const apiRoutes = require("./routes");
const AppError = require("./utils/AppError");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors({ origin: environment.clientOrigin, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRoutes);

app.use((request, response, next) => {
  next(
    new AppError(
      `Route not found: ${request.method} ${request.originalUrl}`,
      404,
    ),
  );
});

app.use(errorHandler); // must be last

module.exports = app;
