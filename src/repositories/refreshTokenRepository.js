// src/repositories/refreshTokenRepository.js
// In production use a database or Redis table and store hashed tokens
const activeRefreshTokens = new Set();

async function save(refreshToken) {
  activeRefreshTokens.add(refreshToken);
}

async function exists(refreshToken) {
  return activeRefreshTokens.has(refreshToken);
}

async function remove(refreshToken) {
  activeRefreshTokens.delete(refreshToken);
}

module.exports = { save, exists, remove };
