const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
    stock: 45,
    rating: 4.5,
    brand: "SoundMax",
    image: "https://picsum.photos/seed/p1/300/300",
  },
  {
    id: 2,
    name: "Smart Fitness Band",
    category: "Electronics",
    price: 1999,
    stock: 80,
    rating: 4.2,
    brand: "FitPulse",
    image: "https://picsum.photos/seed/p2/300/300",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 3999,
    stock: 30,
    rating: 4.7,
    brand: "KeyCraft",
    image: "https://picsum.photos/seed/p3/300/300",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 120,
    rating: 4.3,
    brand: "ClickPro",
    image: "https://picsum.photos/seed/p4/300/300",
  },
  {
    id: 5,
    name: "27-inch 4K Monitor",
    category: "Electronics",
    price: 24999,
    stock: 12,
    rating: 4.6,
    brand: "ViewTech",
    image: "https://picsum.photos/seed/p5/300/300",
  },
  {
    id: 6,
    name: "Men's Cotton T-Shirt",
    category: "Fashion",
    price: 599,
    stock: 200,
    rating: 4.1,
    brand: "UrbanWear",
    image: "https://picsum.photos/seed/p6/300/300",
  },
  {
    id: 7,
    name: "Women's Denim Jacket",
    category: "Fashion",
    price: 2199,
    stock: 55,
    rating: 4.4,
    brand: "BlueLine",
    image: "https://picsum.photos/seed/p7/300/300",
  },
  {
    id: 8,
    name: "Running Shoes",
    category: "Fashion",
    price: 3499,
    stock: 70,
    rating: 4.5,
    brand: "StrideX",
    image: "https://picsum.photos/seed/p8/300/300",
  },
  {
    id: 9,
    name: "Leather Wallet",
    category: "Fashion",
    price: 899,
    stock: 150,
    rating: 4.0,
    brand: "CraftHide",
    image: "https://picsum.photos/seed/p9/300/300",
  },
  {
    id: 10,
    name: "Sunglasses UV400",
    category: "Fashion",
    price: 1299,
    stock: 90,
    rating: 4.2,
    brand: "ShadeCo",
    image: "https://picsum.photos/seed/p10/300/300",
  },
  {
    id: 11,
    name: "Non-Stick Cookware Set",
    category: "Home & Kitchen",
    price: 2799,
    stock: 40,
    rating: 4.3,
    brand: "ChefMate",
    image: "https://picsum.photos/seed/p11/300/300",
  },
  {
    id: 12,
    name: "Electric Kettle 1.8L",
    category: "Home & Kitchen",
    price: 1199,
    stock: 85,
    rating: 4.4,
    brand: "HeatWave",
    image: "https://picsum.photos/seed/p12/300/300",
  },
  {
    id: 13,
    name: "Air Fryer 4L",
    category: "Home & Kitchen",
    price: 5999,
    stock: 25,
    rating: 4.6,
    brand: "CrispyCook",
    image: "https://picsum.photos/seed/p13/300/300",
  },
  {
    id: 14,
    name: "Memory Foam Pillow",
    category: "Home & Kitchen",
    price: 999,
    stock: 110,
    rating: 4.1,
    brand: "SleepWell",
    image: "https://picsum.photos/seed/p14/300/300",
  },
  {
    id: 15,
    name: "LED Desk Lamp",
    category: "Home & Kitchen",
    price: 849,
    stock: 95,
    rating: 4.2,
    brand: "BrightEdge",
    image: "https://picsum.photos/seed/p15/300/300",
  },
  {
    id: 16,
    name: "Yoga Mat 6mm",
    category: "Sports",
    price: 699,
    stock: 130,
    rating: 4.3,
    brand: "ZenFlex",
    image: "https://picsum.photos/seed/p16/300/300",
  },
  {
    id: 17,
    name: "Adjustable Dumbbell Set",
    category: "Sports",
    price: 4499,
    stock: 20,
    rating: 4.5,
    brand: "IronGrip",
    image: "https://picsum.photos/seed/p17/300/300",
  },
  {
    id: 18,
    name: "Badminton Racket Pair",
    category: "Sports",
    price: 1599,
    stock: 60,
    rating: 4.2,
    brand: "SmashPro",
    image: "https://picsum.photos/seed/p18/300/300",
  },
  {
    id: 19,
    name: "Backpack 30L",
    category: "Accessories",
    price: 1799,
    stock: 75,
    rating: 4.4,
    brand: "TrekGear",
    image: "https://picsum.photos/seed/p19/300/300",
  },
  {
    id: 20,
    name: "Stainless Steel Water Bottle",
    category: "Accessories",
    price: 549,
    stock: 180,
    rating: 4.3,
    brand: "HydroKeep",
    image: "https://picsum.photos/seed/p20/300/300",
  },
];

// Get all products
function getAllProducts() {
  return [...products];
}

// Get a product by its ID
function getProductById(productId) {
  return products.find((product) => product.id === productId) || null;
}

// Get products by category
function getProductsByCategory(category) {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
}

// Remove a product by its ID
function removeProductById(productId) {
  const index = products.findIndex((product) => product.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  removeProductById,
};