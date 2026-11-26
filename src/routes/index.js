// src/routes/index.js
const express = require("express");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");

const apiRoutes = express.Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/", userRoutes); // /api/profile
apiRoutes.use("/admin", adminRoutes); // /api/admin/stats
apiRoutes.use("/product-list", productRoutes); // /api/product-list

module.exports = apiRoutes;
