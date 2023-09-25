const nodemailer = require("nodemailer");
const puppeteer = require("puppeteer");
const Donor = require("../models/donor");

async function generatePDF(id) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(`http://localhost:3000/reciept`, {
      waitUntil: "networkidle2",
    });

    await page.waitForFunction(() => localStorage.getItem("donor") !== null);

    const dynamicData = await page.evaluate(() => {
      return localStorage.getItem("donor");
    });

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

      await browser.close();
      console.log("successfully created pdf");
  } catch (err) {
    console.log(err);
  }
}

async function sendMailTo(id,donor){
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

const sendMailPDF = async (req, res) => {
    const id = req.body;
    let donor;
    try {
      donor = await Donor.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!donor) {
      return res.status(404).json({ message: "No Donors Found" });
    }
    console.log(donor);
    await generatePDF(id);
    await sendMailTo(id,donor);

    return res.status(200).json({ donor });
};

module.exports = sendMailPDF;