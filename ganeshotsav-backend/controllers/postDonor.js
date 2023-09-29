const Donor = require("../models/donor");
const nodemailer = require("nodemailer");
const puppeteer = require("puppeteer");
const emailVerify = require("email-verify");

function verifyEmailWithPromise(email) {
  return new Promise((resolve, reject) => {

    emailVerify.verify(email, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

async function generatePDF(id,donor) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.evaluateOnNewDocument((data) => {
      localStorage.setItem("donor", JSON.stringify(data));
    }, donor);


    await page.goto(`https://ganeshostav2k23.vercel.app/reciept`, {
      waitUntil: "networkidle2",
    });

    const storedDataString = await page.evaluate(() => {
      return localStorage.getItem("donor");
    });
    const storedData = JSON.parse(storedDataString);
    console.log("Stored data:", storedData);

    const pdfn = await page.pdf({
      printBackground: true,
      path: `${id}.pdf`,
      format: "A3",
      landscape: true,
      margin: {
        left: "19.5mm",
        right: "19.5mm",
        top: "13mm",
        bottom: "13mm",
      },
    });

    setTimeout(async () => {
      await browser.close();
      console.log("successfully created pdf");
    }, 2000);
  } catch (err) {
    console.log(err);
  }
}

async function sendMailTo(id, donor) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "tanmaypakhale@gmail.com",
      pass: "ijhuwyobyrqqkeoi",
    },
  });

  const mailOptions = {
    from: "tanmaypakhale@gmail.com",
    to: donor.mail,
    subject: "This is a demo mail",
    attachments: [
      {
        filename: "poster.png",
        path: __dirname + "/poster.png",
      },
      {
        filename: `${id}.pdf`,
        path: `${id}.pdf`,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error occured due to", error);
    } else {
      console.log(`Email sent to ${donor.mail}`);
    }
  });
}

const postDonor = async (req, res) => {
  try {
    const { name, mail, amount, hostelName, roomNumber, committeeMemberName } =
      req.body;

    const verificationInfo = await verifyEmailWithPromise(mail);

    if (verificationInfo.success) {
      console.log("Email is valid and deliverable.");
    } else {
      console.log("Email is not valid or not deliverable.");
      return res.status(409).json({
        message: "Email is not valid or not deliverable.",
      });
    }

    const donor = await Donor.create({
      name,
      mail: mail.toLowerCase(),
      amount,
      hostelName,
      roomNumber,
      committeeMemberName,
    });

    const id = donor._id;
    await generatePDF(id,donor);
    await sendMailTo(id,donor);
    

    res.status(201).json({
      donorDetails: {
        name: donor.name,
        mail: donor.mail,
        amount: donor.amount,
        hostelName: donor.hostelName,
        roomNumber: donor.roomNumber,
        committeeMemberName: donor.committeeMemberName,
        _id: donor._id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Required fields are missing or empty",
    });
  }
};

module.exports = postDonor;
