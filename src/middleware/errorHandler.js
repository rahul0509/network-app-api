// src/middleware/errorHandler.js
function errorHandler(error, request, response, next) {
  const statusCode = error.statusCode || 500;

  if (statusCode === 500) {
    console.error(error);
  }

  response.status(statusCode).json({
    message: statusCode === 500 ? "Something went wrong" : error.message,
  });
}

module.exports = errorHandler;
