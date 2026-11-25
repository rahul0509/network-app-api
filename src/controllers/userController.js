function getProfile(request, response) {
  response.json({ user: request.authenticatedUser });
}

module.exports = { getProfile };
