// src/routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const verifyAccessToken = require("../middleware/verifyAccessToken");

const userRoutes = express.Router();

userRoutes.get("/profile", verifyAccessToken, userController.getProfile);

module.exports = userRoutes;
