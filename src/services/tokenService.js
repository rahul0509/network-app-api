// src/services/tokenService.js
const jwt = require("jsonwebtoken");
const environment = require("../config/environment");

const refreshCookieName = "refreshToken";
const refreshCookiePath = "/api/auth";

function createAccessToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    environment.accessTokenSecret,
    { expiresIn: environment.accessTokenLifetime },
  );
}

function createRefreshToken(user, keepLoggedIn) {
  return jwt.sign(
    { userId: user.id, keepLoggedIn },
    environment.refreshTokenSecret,
    {
      expiresIn: keepLoggedIn ? "7d" : "1d",
    },
  );
}

function verifyAccessToken(accessToken) {
  return jwt.verify(accessToken, environment.accessTokenSecret);
}

function verifyRefreshToken(refreshToken) {
  return jwt.verify(refreshToken, environment.refreshTokenSecret);
}

// With keepLoggedIn the cookie survives browser restarts; without it, it is a session cookie
function buildRefreshCookieOptions(keepLoggedIn) {
  const baseOptions = {
    httpOnly: true,
    secure: environment.isProduction,
    sameSite: "lax",
    path: refreshCookiePath,
  };

  return keepLoggedIn
    ? { ...baseOptions, maxAge: 7 * 24 * 60 * 60 * 1000 }
    : baseOptions;
}

module.exports = {
  refreshCookieName,
  refreshCookiePath,
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  buildRefreshCookieOptions,
};
