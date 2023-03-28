const Contact = require("../../db/schemas");

exports.addContact = async (req, res) => {
  try {
    const contacts = await Contact.create(req.body);

    res.status(201).json(contacts);
  } catch (err) {
    res.status(500).json({
      msg: err.msg,
    });
  }
};
