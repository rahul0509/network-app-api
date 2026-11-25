// src/controllers/adminController.js
function getStatistics(request, response) {
  response.json({ totalUsers: 42 });
}

module.exports = { getStatistics };
