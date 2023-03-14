const userModel = require('../models/user.model');

const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  if (users.length === 0)
    return res
      .status(400)
      .json({ success: false, message: 'The profiles were not found!' });
  return res.status(200).json({
    users,
  });
};

exports.getAllUsers = getAllUsers;
