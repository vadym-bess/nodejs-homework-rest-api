const Contact = require("../../db/schemas");

exports.getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;

    const contacts = await Contact.findById(contactId);

    res.status(200).json(contacts);
  } catch (err) {
    res.status(404).json({
      msg: err.msg,
    });
  }
};
