// src/controllers/authController.js
const AppError = require("../utils/AppError");
const authService = require("../services/authService");
const tokenService = require("../services/tokenService");

async function login(request, response) {
  const { email, password, keepLoggedIn = false } = request.body;

  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  const loginResult = await authService.login({
    email,
    password,
    keepLoggedIn,
  });

  response.cookie(
    tokenService.refreshCookieName,
    loginResult.refreshToken,
    tokenService.buildRefreshCookieOptions(keepLoggedIn),
  );
  response.json({ token: loginResult.accessToken, user: loginResult.user });
}

async function refresh(request, response) {
  const refreshResult = await authService.refresh(
    request.cookies[tokenService.refreshCookieName],
  );

  response.cookie(
    tokenService.refreshCookieName,
    refreshResult.refreshToken,
    tokenService.buildRefreshCookieOptions(refreshResult.keepLoggedIn),
  );
  response.json({ token: refreshResult.accessToken });
}

async function logout(request, response) {
  await authService.logout(request.cookies[tokenService.refreshCookieName]);

  response.clearCookie(tokenService.refreshCookieName, {
    path: tokenService.refreshCookiePath,
  });
  response.json({ message: "Logged out" });
}

module.exports = { login, refresh, logout };
