const Donor = require('../models/donor')

const getDonorbyId = async (req, res) => {
  const _id = req.params.id;
  let donor;
  try {
    donor = await Donor.findById(_id);
  } catch (err) {
    console.log(err);
  }
  if (!donor) {
    return res.status(404).json({ message: "No Donors Found" });
  }
  return res.status(200).json({ donor });
};

module.exports = getDonorbyId;
