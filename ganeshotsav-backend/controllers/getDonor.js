const Donor = require('../models/donor')

const getAllUser = async(req, res)=> {
    let donors;
    try {
        donors = await Donor.find();
    } catch(err){
        console.log(err);
    }
    if(!donors){
        return res.status(404).json({message: "No Donors Found"});
    }
    return res.status(200).json({donors});

}

module.exports = getAllUser;