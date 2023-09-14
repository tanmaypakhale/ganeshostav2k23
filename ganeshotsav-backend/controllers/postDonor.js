const Donor = require('../models/donor')
const nodemailer = require('nodemailer')


const postDonor = async (req,res) => {
    try {
        const { 
            name,
            mail,
            amount,
            hostelName,
            roomNumber,
            committeeMemberName
        } = req.body;

         const donor = await Donor.create({
            name,
            mail: mail.toLowerCase(),
            amount,
            hostelName,
            roomNumber,
            committeeMemberName
        });   

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: 'smtp.gmail.com',
            auth: {
                user: 'tanmaypakhale@gmail.com',
                pass: 'ijhuwyobyrqqkeoi'
            }
        })

        const mailOptions = {
            from: 'tanmaypakhale@gmail.com',
            to: mail,
            subject: 'Thank you for paying',
            html: `<h1>Thanks for paying ${amount}</h1>`
        }

        transporter.sendMail(mailOptions,(error,info) => {
            if(error){
                console.log('error occured due to',error);
            }
            else{
                console.log('Email sent');
            }
        })
        res.status(201).json({
            donorDetails:{
            name: donor.name,
            mail: donor.mail,
            amount: donor.amount,
            hostelName: donor.hostelName,
            roomNumber: donor.roomNumber,
            committeeMemberName: donor.committeeMemberName,
            _id: donor._id
            }
        })
    } catch(err){
        console.log(err);
        return res.status(500).send("Error Occured, please try again");
    }
};

module.exports = postDonor;