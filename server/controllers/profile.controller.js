const profileModel = require('../models/profile.model');

const postProfile = async (req, res) => {
  const results = req.body;
  try {
    const newProfile = await profileModel.create({
      _id: results.id,
      name: results.name,
    });
    if (!newProfile)
      return res.status(400).json({ message: 'The profile was not created!' });
    console.log(newProfile._id, ' was created for', newProfile.name);
    return res.status(200).json({
      message: `${newProfile._id} was created for ${newProfile.name}`,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: 'The profile was not created!', error: `${err}` });
  }
};

const getAllProfiles = async (req, res) => {
  const profiles = await profileModel.find();
  if (profiles.length === 0)
    return res.status(400).json({ message: 'The profiles were not found!' });
  console.log(profiles);
  return res.status(200).json({
    profiles,
  });
};

exports.postProfile = postProfile;
exports.getAllProfiles = getAllProfiles;
