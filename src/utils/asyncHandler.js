// Sends errors from async controllers to the error handler (needed on Express 4)
const asyncHandler = (handlerFunction) => (request, response, next) =>
  Promise.resolve(handlerFunction(request, response, next)).catch(next);

module.exports = asyncHandler;
