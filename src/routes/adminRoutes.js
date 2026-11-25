// src/routes/adminRoutes.js
const express = require("express");
const adminController = require("../controllers/adminController");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const requireRole = require("../middleware/requireRole");

const adminRoutes = express.Router();

// Every admin route needs a valid token AND the admin role
adminRoutes.use(verifyAccessToken, requireRole("admin"));

adminRoutes.get("/stats", adminController.getStatistics);

module.exports = adminRoutes;
