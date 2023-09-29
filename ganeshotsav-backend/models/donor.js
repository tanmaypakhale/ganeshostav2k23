const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donorSchema = new mongoose.Schema({
  mail: { type: String, required: true },
  name: { type: String, required: true },
  roomNumber: { type: String, required: true },
  hostelName: { type: String, required: true },
  amount: { type: Number, required: true },
  committeeMemberName: { type: String, required: true },
});

module.exports = mongoose.model("donor", donorSchema);
