// Product Service
const productRepository = require("../repositories/productRepository");

function getAllProducts() {
  return productRepository.getAllProducts();
}

function getProductById(productId) {
  return productRepository.getProductById(productId);
}

function getProductsByCategory(category) {
  return productRepository.getProductsByCategory(category);
}

function removeProductById(productId) {
  return productRepository.removeProductById(productId);
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  removeProductById,
};
