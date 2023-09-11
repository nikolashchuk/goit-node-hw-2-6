const updateAvatar = require("./updateAvatar");

const { ctrlWrapper } = require("../../helpers");

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
