const express = require('express');
const donorControllers = require('../controllers/donorControllers')

const router = express.Router();

router.post("/add-donor",donorControllers.controllers.postDonor);

router.get("/getalldonors",donorControllers.controllers.getDonor);

router.delete("/deletedonor/:id",donorControllers.controllers.deleteDonor);

router.get("/sendmail", donorControllers.controllers.sendMailPDF);

router.get("/getdonor/:id", donorControllers.controllers.getDonorbyId);
module.exports = router;