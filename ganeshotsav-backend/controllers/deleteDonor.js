const Donor = require('../models/donor')

const deleteDonor = async(req, res)=> {
    let donors;
    try {
        const _id=req.params.id;
        console.log(_id);
        donors = await Donor.findByIdAndDelete(_id);
        return res.status(200).json({donors});
    } catch(err){
        console.log(err);
        return res.status(500).send("Error Occured, please try again");
    }
}

module.exports = deleteDonor;