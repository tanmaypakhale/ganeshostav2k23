const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donorSchema = new mongoose.Schema({
    mail: {type: String},
    name: {type: String},
    roomNumber: {type: String},
    hostelName: {type: String},
    amount: {type: Number},
    committeeMemberName: {type: String},
    
});

module.exports = mongoose.model("donor",donorSchema);