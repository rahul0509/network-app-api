const express = require("express");
const productController = require("../controllers/productController");
const asyncHandler = require("../utils/asyncHandler");

const productRoutes = express.Router();

productRoutes.get("/", asyncHandler(productController.products));

module.exports = productRoutes;
