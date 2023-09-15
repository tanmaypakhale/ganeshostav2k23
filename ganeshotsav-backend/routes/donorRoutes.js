const express = require('express');
const donorControllers = require('../controllers/donorControllers')

const router = express.Router();

router.post("/add-donor",donorControllers.controllers.postDonor);

router.get("/getalldonors",donorControllers.controllers.getDonor);

router.delete("/deletedonor/:id",donorControllers.controllers.deleteDonor);

module.exports = router;