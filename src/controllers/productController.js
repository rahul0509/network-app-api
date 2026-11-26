const productService = require("../services/productService");

async function products(request, response) {
  const allProducts = await productService.getAllProducts();
  response.json({ products: allProducts });
}

module.exports = { products };
