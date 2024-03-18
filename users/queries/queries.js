const retrieveUser = "SELECT * FROM users WHERE user_id = $1";

module.exports = { retrieveUser };