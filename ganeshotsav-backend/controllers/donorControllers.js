const postDonor = require('./postDonor.js');
const getDonor = require('./getDonor.js');
const deleteDonor = require('./deleteDonor.js');
const sendMailPDF = require('./sendMailPDF.js');
const getDonorbyId = require('./getDonorbyId.js')


exports.controllers = {
    postDonor,
    getDonor,
    deleteDonor,
    sendMailPDF,
    getDonorbyId
}