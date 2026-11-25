// src/services/authService.js
const bcrypt = require("bcryptjs");
const AppError = require("../utils/AppError");
const userRepository = require("../repositories/userRepository");
const refreshTokenRepository = require("../repositories/refreshTokenRepository");
const tokenService = require("./tokenService");

const toPublicUser = (user) => ({
  id: user.id,
  email: user.email,
  role: user.role,
});

async function login({ email, password, keepLoggedIn }) {
  const matchedUser = await userRepository.findByEmail(email);
  const isPasswordValid =
    matchedUser && (await bcrypt.compare(password, matchedUser.passwordHash));

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const refreshToken = tokenService.createRefreshToken(
    matchedUser,
    keepLoggedIn,
  );
  await refreshTokenRepository.save(refreshToken);

  return {
    accessToken: tokenService.createAccessToken(matchedUser),
    refreshToken,
    user: toPublicUser(matchedUser),
  };
}

async function refresh(incomingRefreshToken) {
  const isKnownToken =
    incomingRefreshToken &&
    (await refreshTokenRepository.exists(incomingRefreshToken));
  if (!isKnownToken) {
    throw new AppError("No refresh token", 401);
  }

  let decodedPayload;
  try {
    decodedPayload = tokenService.verifyRefreshToken(incomingRefreshToken);
  } catch (verificationError) {
    await refreshTokenRepository.remove(incomingRefreshToken);
    throw new AppError("Refresh token expired", 401);
  }

  const matchedUser = await userRepository.findById(decodedPayload.userId);
  if (!matchedUser) {
    throw new AppError("User not found", 401);
  }

  // Rotation: invalidate the old refresh token and issue a new one, keeping the user's choice
  const keepLoggedIn = decodedPayload.keepLoggedIn === true;
  await refreshTokenRepository.remove(incomingRefreshToken);
  const rotatedRefreshToken = tokenService.createRefreshToken(
    matchedUser,
    keepLoggedIn,
  );
  await refreshTokenRepository.save(rotatedRefreshToken);

  return {
    accessToken: tokenService.createAccessToken(matchedUser),
    refreshToken: rotatedRefreshToken,
    keepLoggedIn,
  };
}

async function logout(incomingRefreshToken) {
  if (incomingRefreshToken) {
    await refreshTokenRepository.remove(incomingRefreshToken);
  }
}

module.exports = { login, refresh, logout };
