const AppError = require("../utils/AppError");
const tokenService = require("../services/tokenService");

function verifyAccessToken(request, response, next) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader?.startsWith("Bearer ")) {
    return next(new AppError("No token", 401));
  }

  try {
    request.authenticatedUser = tokenService.verifyAccessToken(
      authorizationHeader.split(" ")[1],
    );
    next();
  } catch (verificationError) {
    next(new AppError("Invalid or expired token", 401));
  }
}

module.exports = verifyAccessToken;
