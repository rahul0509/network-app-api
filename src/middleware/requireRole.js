// src/middleware/requireRole.js
const AppError = require("../utils/AppError");

const requireRole =
  (...allowedRoles) =>
  (request, response, next) => {
    if (!allowedRoles.includes(request.authenticatedUser.role)) {
      return next(new AppError("Forbidden", 403));
    }
    next();
  };

module.exports = requireRole;
