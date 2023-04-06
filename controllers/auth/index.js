const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { current } = require("./current");
const { avatars } = require("./avatars");
module.exports = {
  register,
  login,
  logout,
  current,
  avatars,
};
