const express = require("express");

const router = express.Router();

const {
  postContactValidation,
  putContactValidation,
  patchFavoriteValidation,
} = require("../../middlewares");

const {
  getContacts,
  addContact,
  deleteContactById,
  getContactById,
  updateContactById,
  updateStatusContact,
} = require("../../controllers/contacts");

const { authMiddleware } = require("../../middlewares/authMiddleware");
router.use(authMiddleware);

router.get("/", getContacts);
router.post("/", postContactValidation, addContact);
router.delete("/:contactId", deleteContactById);
router.put("/:contactId", putContactValidation, updateContactById);
router.get("/:contactId", getContactById);
router.patch(
  "/:contactId/favorite",
  patchFavoriteValidation,
  updateStatusContact
);

module.exports = router;
