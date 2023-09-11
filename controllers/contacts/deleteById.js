const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Contact not found");
  }
  res.json({ message: "Contact deleted" });
};

module.exports = deleteById;
