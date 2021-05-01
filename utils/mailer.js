const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(emailId) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL, // sender address
    to: emailId, // list of receivers
    subject: "final mail Test", // Subject line
    html: "<b>Your mailer is working</b>", // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, data) => {
      if(err){
          console.log(err)
      }else{
          console.log("Mail Sent")
      }
  });
}

module.exports = sendMail