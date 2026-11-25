const bcrypt = require("bcryptjs");

// Demo data - replace the body of these functions with real database queries
const registeredUsers = [
  {
    id: "1",
    email: "admin@test.com",
    role: "admin",
    passwordHash: bcrypt.hashSync("123456", 10),
  },
  {
    id: "2",
    email: "user@test.com",
    role: "user",
    passwordHash: bcrypt.hashSync("123456", 10),
  },
];

async function findByEmail(email) {
  return registeredUsers.find((user) => user.email === email) || null;
}

async function findById(userId) {
  return registeredUsers.find((user) => user.id === userId) || null;
}

module.exports = { findByEmail, findById };
