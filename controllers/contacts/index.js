const { getContacts } = require("../contacts/getContacts");
const { addContact } = require("../contacts/addContact");
const { deleteContactById } = require("../contacts/deleteContactById");
const { getContactById } = require("../contacts/getContactById");
const { updateStatusContact } = require("./updateStatusContact");
const { updateContactById } = require("../contacts/updateContactById");

module.exports = {
  getContacts,
  addContact,
  deleteContactById,
  getContactById,
  updateStatusContact,
  updateContactById,
};
