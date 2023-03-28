const Contact = require("../../db/schemas");

exports.deleteContactById = async (req, res) => {
  try {
    const { contactId } = req.params;

    const contact = await Contact.findByIdAndRemove(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "contact deleted" });
  } catch (err) {
    console.error(err);
  }
};
