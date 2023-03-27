const Contact = require("../../db/schemas");

exports.updateContactById = async (req, res, next) => {
  try {
    if (JSON.stringify(req.body) === "{}") {
      return res.status(404).json({ message: "Missing fields" });
    }
    const { contactId } = req.params;

    const newContact = await Contact.findByIdAndUpdate(
      contactId,
      {
        $set: req.body,
      },
      { returnDocument: "after" }
    );

    if (!newContact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(newContact);
  } catch (err) {
    res.status(500).json({
      msg: err.msg,
    });
  }
};
