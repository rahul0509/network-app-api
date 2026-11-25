// src/routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");
const asyncHandler = require("../utils/asyncHandler");

const authRoutes = express.Router();

authRoutes.post("/login", asyncHandler(authController.login));
authRoutes.post("/refresh", asyncHandler(authController.refresh));
authRoutes.post("/logout", asyncHandler(authController.logout));

module.exports = authRoutes;
