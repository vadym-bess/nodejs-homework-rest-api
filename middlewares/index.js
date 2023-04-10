const { upload } = require("./uploadAvatar");
const { confirmUser } = require("./confirmUser");
const { verifyMiddleware } = require("./verifyMiddleware");
const { userRegisterValidation } = require("./userMiddleware");
const {
  postContactValidation,
  putContactValidation,
  patchFavoriteValidation,
} = require("./validationMiddleware");

module.exports = {
  postContactValidation,
  putContactValidation,
  patchFavoriteValidation,
  userRegisterValidation,
  upload,
  confirmUser,
  verifyMiddleware,
};
